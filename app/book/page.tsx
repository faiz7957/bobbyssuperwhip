"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function BookPage() {
  const initial = {
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    venue: "",
    guests: "",
    message: "",
  };

  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.eventType ||
      !form.eventDate ||
      !form.venue ||
      !form.message
    ) {
      setError("Please complete all required fields.");
      return;
    }

    setLoading(true);

    try {
      const r = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const d = await r.json();

      if (!r.ok || !d.success) throw new Error();

      setSuccess("Thanks! Your enquiry has been sent successfully.");
      setForm(initial);
    } catch {
      setError("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-500 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-200";

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white pt-28">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Book Bobby&apos;s Super Whip
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-800">
              Make Your Event Extra Special
            </h1>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <h2 className="mb-6 text-3xl font-bold text-slate-800">
                Why Choose Bobby&apos;s?
              </h2>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <h2 className="mb-8 text-3xl font-bold text-slate-800">
                Request a Quote
              </h2>

              {success && (
                <div className="mb-6 rounded-xl bg-green-100 p-4 text-green-700">
                  {success}
                </div>
              )}

              {error && (
                <div className="mb-6 rounded-xl bg-red-100 p-4 text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={inputClass}
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={inputClass}
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number (Optional)"
                  className={inputClass}
                />

                <select
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Event Type</option>
                  <option>Birthday Party</option>
                  <option>Wedding</option>
                  <option>School</option>
                  <option>Nursery</option>
                  <option>Corporate Event</option>
                  <option>Sports Club</option>
                  <option>Festival</option>
                  <option>Other</option>
                </select>

                <input
                  name="eventDate"
                  type="date"
                  value={form.eventDate}
                  onChange={handleChange}
                  className={inputClass}
                />

                <input
                  name="venue"
                  value={form.venue}
                  onChange={handleChange}
                  placeholder="Venue / Postcode"
                  className={inputClass}
                />

                <input
                  name="guests"
                  type="number"
                  value={form.guests}
                  onChange={handleChange}
                  placeholder="Estimated Number of Guests"
                  className={inputClass}
                />

                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                  className={inputClass}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-sky-600 py-4 text-lg font-bold text-white"
                >
                  {loading ? "Sending..." : "Request a Quote"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}