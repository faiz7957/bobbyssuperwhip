"use client";

import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { Images, Upload, Trash2, LogOut, LockKeyhole, RefreshCw, CheckCircle2, AlertCircle, GripVertical, Save } from "lucide-react";

type Category = "gallery" | "customers";
type Photo = { publicId: string; url: string; width?: number; height?: number; format?: string; createdAt?: string };

const categoryLabels: Record<Category, string> = { gallery: "Main gallery", customers: "Customer photos" };

export default function PhotoAdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [category, setCategory] = useState<Category>("gallery");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [orderDirty, setOrderDirty] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);

  const loadPhotos = useCallback(async (target: Category) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/admin/photos?category=${target}`, { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not load photos.");
      setPhotos(data.photos || []);
      setOrderDirty(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load photos.");
    } finally { setLoading(false); }
  }, []);

  useEffect(() => {
    fetch("/api/admin/status", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        setConfigured(data.configured);
        if (data.authenticated) setAuthenticated(true);
      })
      .catch(() => setConfigured(false));
  }, []);

  useEffect(() => {
    if (authenticated) loadPhotos(category);
  }, [authenticated, category, loadPhotos]);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(""); setMessage(""); setLoading(true);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not sign in.");
      setAuthenticated(true); setPassword(""); setMessage("You're signed in.");
    } catch (err) { setError(err instanceof Error ? err.message : "Could not sign in."); }
    finally { setLoading(false); }
  }

  function chooseFiles(event: ChangeEvent<HTMLInputElement>) {
    setFiles(Array.from(event.target.files || []));
    setMessage(""); setError("");
  }

  function movePhoto(targetId: string) {
    if (!draggedId || draggedId === targetId) return;
    setPhotos((current) => {
      const from = current.findIndex((photo) => photo.publicId === draggedId);
      const to = current.findIndex((photo) => photo.publicId === targetId);
      if (from < 0 || to < 0) return current;
      const next = [...current];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
    setOrderDirty(true);
    setMessage(""); setError("");
    setDraggedId(null);
  }

  async function saveOrder() {
    setSavingOrder(true); setError(""); setMessage("");
    try {
      const response = await fetch("/api/admin/photos", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, publicIds: photos.map((photo) => photo.publicId) }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not save photo order.");
      setOrderDirty(false);
      setMessage(`Photo order saved for ${categoryLabels[category].toLowerCase()}.`);
      await loadPhotos(category);
    } catch (err) { setError(err instanceof Error ? err.message : "Could not save photo order."); }
    finally { setSavingOrder(false); }
  }

  async function uploadFiles() {
    if (!files.length) { setError("Choose one or more photos first."); return; }
    setUploading(true); setError(""); setMessage("");
    let successes = 0;
    const failures: string[] = [];
    for (const file of files) {
      const form = new FormData();
      form.set("file", file);
      form.set("category", category);
      try {
        const response = await fetch("/api/admin/photos", { method: "POST", body: form });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Upload failed.");
        successes += 1;
      } catch (err) {
        failures.push(`${file.name}: ${err instanceof Error ? err.message : "Upload failed"}`);
      }
    }
    setFiles([]);
    const picker = document.getElementById("photo-files") as HTMLInputElement | null;
    if (picker) picker.value = "";
    if (successes) setMessage(`${successes} photo${successes === 1 ? "" : "s"} uploaded to ${categoryLabels[category].toLowerCase()}.`);
    if (failures.length) setError(failures.join(" • "));
    await loadPhotos(category);
    setUploading(false);
  }

  async function deletePhoto(photo: Photo) {
    if (!window.confirm("Delete this photo permanently? This also removes it from the live gallery.")) return;
    setError(""); setMessage("");
    try {
      const response = await fetch("/api/admin/photos", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId: photo.publicId, category }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not delete photo.");
      setPhotos((current) => current.filter((item) => item.publicId !== photo.publicId));
      setMessage("Photo deleted.");
    } catch (err) { setError(err instanceof Error ? err.message : "Could not delete photo."); }
  }

  async function signOut() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false); setPhotos([]); setMessage("Signed out.");
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white"><Images size={25} /></div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-600">Bobby&apos;s Super Whip</p>
            <h1 className="text-3xl font-black text-slate-900">Photo manager</h1>
          </div>
        </div>

        {configured === false && (
          <div className="mb-6 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
            <strong>Setup needed before you can sign in.</strong>
            <p>Configure Cloudinary storage and the admin password in your deployment environment. See <code>PHOTO-MANAGER-SETUP.md</code> in the project ZIP.</p>
          </div>
        )}

        {!authenticated ? (
          <form onSubmit={signIn} className="max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700"><LockKeyhole /></div>
            <h2 className="text-xl font-bold text-slate-900">Admin sign in</h2>
            <p className="mt-2 text-sm text-slate-600">Only you should have access to photo management.</p>
            <label htmlFor="password" className="mt-6 block text-sm font-semibold text-slate-700">Admin password</label>
            <input id="password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100" required />
            <button disabled={loading || configured === false} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-bold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50">
              <LockKeyhole size={18} /> {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        ) : (
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Manage website photos</h2>
                <p className="mt-1 text-sm text-slate-600">Uploads go straight to permanent image storage.</p>
              </div>
              <button onClick={signOut} className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"><LogOut size={16} /> Sign out</button>
            </div>

            <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[300px_1fr]">
              <div className="space-y-5">
                <div>
                  <label htmlFor="category" className="block text-sm font-bold text-slate-800">Where should the photos appear?</label>
                  <select id="category" value={category} onChange={(event) => { setCategory(event.target.value as Category); setFiles([]); }} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900">
                    <option value="gallery">Main website gallery</option>
                    <option value="customers">Customer photos</option>
                  </select>
                </div>
                <div className="rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50 p-5">
                  <Upload className="mb-3 text-sky-600" size={26} />
                  <h3 className="font-bold text-slate-900">Add photos</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">Select multiple images. JPG, PNG and WebP supported, up to 12 MB each.</p>
                  <input id="photo-files" type="file" accept="image/*" multiple onChange={chooseFiles} className="mt-4 block w-full text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-white file:px-3 file:py-2 file:font-semibold file:text-sky-700" />
                  {files.length > 0 && <p className="mt-3 text-sm font-semibold text-slate-700">{files.length} photo{files.length === 1 ? "" : "s"} selected</p>}
                  <button onClick={uploadFiles} disabled={!files.length || uploading} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-3 font-bold text-slate-900 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50">
                    <Upload size={17} /> {uploading ? "Uploading photos…" : "Upload photos"}
                  </button>
                </div>
                <button onClick={() => loadPhotos(category)} disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"><RefreshCw size={16} /> Refresh photos</button>
              </div>

              <div>
                <div className="mb-4 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{categoryLabels[category]}</h3>
                    <p className="text-sm text-slate-600">{photos.length} managed photo{photos.length === 1 ? "" : "s"}</p>
                    <p className="mt-1 text-xs text-slate-500">Drag photos to arrange them, then save your order.</p>
                  </div>
                  <button onClick={saveOrder} disabled={!orderDirty || savingOrder || loading} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-sky-600 px-3 py-2 text-sm font-bold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-40"><Save size={15} /> {savingOrder ? "Saving…" : "Save order"}</button>
                </div>
                {loading ? <p className="rounded-xl bg-slate-50 p-8 text-center text-slate-600">Loading photos…</p> : photos.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center">
                    <Images className="mx-auto mb-3 text-slate-400" size={34} />
                    <p className="font-semibold text-slate-800">No uploaded photos yet</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Upload your current website photos here first. Once the existing photos have been moved into managed storage, you can add and delete them from this page.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                    {photos.map((photo) => (
                      <div key={photo.publicId} draggable onDragStart={() => setDraggedId(photo.publicId)} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); movePhoto(photo.publicId); }} onDragEnd={() => setDraggedId(null)} className={`overflow-hidden rounded-2xl border bg-white cursor-grab active:cursor-grabbing ${draggedId === photo.publicId ? "border-sky-500 opacity-50" : "border-slate-200"}`} title="Drag to reorder">
                        <div className="relative aspect-square bg-slate-100">
                          {/* Cloudinary image URLs are supplied by the trusted photo-storage API. */}
                          <img src={photo.url} alt="" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        <div className="p-3">
                          <p className="mb-2 flex items-center gap-1 text-xs font-semibold text-slate-500"><GripVertical size={14} /> Drag to reorder</p>
                          <p className="truncate text-xs text-slate-600" title={photo.publicId}>{photo.publicId.split("/").pop()}</p>
                          <button onClick={() => deletePhoto(photo)} className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 px-2 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"><Trash2 size={15} /> Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {(message || error) && (
          <div className={`mt-5 flex items-start gap-3 rounded-2xl border p-4 text-sm ${error ? "border-red-200 bg-red-50 text-red-800" : "border-emerald-200 bg-emerald-50 text-emerald-800"}`}>
            {error ? <AlertCircle size={18} className="mt-0.5 shrink-0" /> : <CheckCircle2 size={18} className="mt-0.5 shrink-0" />}
            <p>{error || message}</p>
          </div>
        )}
        <p className="mt-8 text-center text-xs text-slate-500">Private tools for Bobby&apos;s Super Whip · <a href="/" className="underline hover:text-sky-700">Back to website</a></p>
      </div>
    </main>
  );
}
