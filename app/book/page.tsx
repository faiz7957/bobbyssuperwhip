"use client";

import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  BadgeCheck,
  ChefHat,
  CreditCard,
  MapPin,
  PartyPopper,
  User,
  Mail,
  Phone,
  Calendar,
  MapPinned,
  Users,
  MessageSquare,
  ArrowRight,
  Lock,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          size?: "normal" | "compact" | "flexible" | "invisible";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex min-w-0 items-start gap-4 rounded-2xl border border-slate-200 border-l-4 border-l-sky-500 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="text-lg font-semibold text-slate-800">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {text}
        </p>
      </div>
    </div>
  );
}

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
  const [turnstileToken, setTurnstileToken] = useState("");

  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderTurnstile = () => {
      if (
        !turnstileRef.current ||
        !window.turnstile ||
        turnstileWidgetId.current
      ) {
        return;
      }

      const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

      if (!siteKey) {
        setError("Security verification is not configured.");
        return;
      }

      // Use Cloudflare's compact widget on mobile.
      // Keep the normal widget on desktop.
      const isMobile = window.innerWidth < 768;

      turnstileWidgetId.current = window.turnstile.render(
        turnstileRef.current,
        {
          sitekey: siteKey,
          size: isMobile ? "compact" : "normal",

          callback: (token: string) => {
            setTurnstileToken(token);
            setError("");
          },

          "expired-callback": () => {
            setTurnstileToken("");
          },

          "error-callback": () => {
            setTurnstileToken("");
            setError(
              "The security check could not be completed. Please try again."
            );
          },
        }
      );
    };

    if (window.turnstile) {
      renderTurnstile();
      return;
    }

    const interval = window.setInterval(() => {
      if (window.turnstile) {
        renderTurnstile();
        window.clearInterval(interval);
      }
    }, 100);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (success && successRef.current) {
      successRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [success]);

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

    if (!turnstileToken) {
      setError(
        "Please complete the security check before sending your enquiry."
      );
      return;
    }

    setLoading(true);

    try {
      const r = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          turnstileToken,
        }),
      });

      const d = await r.json();

      if (!r.ok || !d.success) {
        throw new Error();
      }

      setSuccess("Thanks! Your enquiry has been sent successfully.");
      setForm(initial);
      setTurnstileToken("");

      if (window.turnstile && turnstileWidgetId.current) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
    } catch {
      setError("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "box-border w-full max-w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-500 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-200";

  return (
    <>
      <Breadcrumb current="Book Bobby's Super Whip" />

      <main className="min-h-screen overflow-x-clip bg-gradient-to-b from-sky-50 to-white">
        <section className="mx-auto w-full max-w-7xl overflow-x-clip px-4 py-20 sm:px-6">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Book Bobby&apos;s Super Whip
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-800">
              Make Your Event Extra Special
            </h1>
          </div>

          <div className="grid min-w-0 gap-12 lg:grid-cols-2">

            {/* Why Choose Bobby's */}
            <div className="min-w-0 rounded-3xl bg-white p-10 shadow-xl">
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
                Why Choose Bobby&apos;s Super Whip?
              </h2>

              <p className="mt-3 mb-8 text-slate-600">
                Trusted by families, schools, businesses and event organisers
                across Walsall and the West Midlands.
              </p>

              <div className="space-y-5">
                <Feature
                  icon={<ShieldCheck size={28} />}
                  title="£10 Million Public Liability Insurance"
                  text="Fully insured for complete peace of mind at every event."
                />

                <Feature
                  icon={<BadgeCheck size={28} />}
                  title="5-Star Food Hygiene Rating"
                  text="Awarded the highest possible Food Hygiene Rating."
                />

                <Feature
                  icon={<ChefHat size={28} />}
                  title="Level 2 Food Safety & Hygiene"
                  text="Certified in food safety and hygiene for catering."
                />

                <Feature
                  icon={<CreditCard size={28} />}
                  title="Flexible Event Packages"
                  text="Packages tailored to suit your event, guest numbers and budget."
                />

                <Feature
                  icon={<MapPin size={28} />}
                  title="Walsall & West Midlands"
                  text="Serving events across Walsall and the surrounding West Midlands."
                />
              </div>
            </div>

            {/* Booking Form */}
            <div className="min-w-0 rounded-3xl bg-white p-10 shadow-xl">
              <h2 className="mb-8 text-3xl font-bold text-slate-800">
                Get My Quote
              </h2>

              {success && (
                <div
                  ref={successRef}
                  className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white">
                    ✓
                  </div>

                  <h3 className="text-lg font-bold text-green-800">
                    Thank You!
                  </h3>

                  <p className="mt-2 text-green-700">
                    Your enquiry has been sent successfully.
                  </p>

                  <p className="mt-1 text-sm text-green-600">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 rounded-xl bg-red-100 p-4 text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="min-w-0 space-y-6">

                {/* Name */}
                <div className="relative min-w-0">
                  <User
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`${inputClass} pl-12`}
                  />
                </div>

                {/* Email */}
                <div className="relative min-w-0">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`${inputClass} pl-12`}
                  />
                </div>

                {/* Phone */}
                <div className="relative min-w-0">
                  <Phone
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number (Optional)"
                    className={`${inputClass} pl-12 placeholder:text-xs sm:placeholder:text-lg`}
                  />
                </div>

                {/* Event Type */}
                <div className="relative min-w-0">
                  <PartyPopper
                    size={20}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    className={`${inputClass} pl-12 text-slate-500`}
                    style={{ color: "#64748b" }}
                  >
                    <option value="" className="text-slate-500">
                      Event Type
                    </option>
                    <option>Birthday Party</option>
                    <option>Wedding</option>
                    <option>School</option>
                    <option>Nursery</option>
                    <option>Corporate Event</option>
                    <option>Sports Club</option>
                    <option>Festival</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Event Date */}
                <div className="relative min-w-0">
                  <Calendar
                    size={20}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="eventDate"
                    type="date"
                    value={form.eventDate}
                    onChange={handleChange}
                    className={`${inputClass} pl-12`}
                  />
                </div>

                {/* Venue */}
                <div className="relative min-w-0">
                  <MapPinned
                    size={20}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="venue"
                    value={form.venue}
                    onChange={handleChange}
                    placeholder="Venue / Postcode"
                    className={`${inputClass} pl-12`}
                  />
                </div>

                {/* Guests */}
                <div className="relative min-w-0">
                  <Users
                    size={20}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    name="guests"
                    type="number"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="Estimated Number of Guests"
                    className={`${inputClass} pl-12 placeholder:text-xs sm:placeholder:text-lg`}
                  />
                </div>

                {/* Message */}
                <div className="relative min-w-0">
                  <MessageSquare
                    size={20}
                    className="pointer-events-none absolute left-4 top-5 text-slate-400"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event..."
                    className={`${inputClass} pl-12`}
                  />
                </div>

                {/* Cloudflare Turnstile */}
                <div className="flex w-full justify-center pt-2">
                  <div ref={turnstileRef} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full max-w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      Request a Quote

                      <ArrowRight
                        size={22}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                {/* Privacy */}
                <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
                  <Lock size={16} />

                  Your information is kept private and will only be used to
                  respond to your enquiry.
                </p>

              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}