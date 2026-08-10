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
    <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 border-l-4 border-l-sky-500 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
        {icon}
      </div>

      <div>
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

      turnstileWidgetId.current = window.turnstile.render(
        turnstileRef.current,
        {
          sitekey: siteKey,
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
      setError("Please complete the security check before sending your enquiry.");
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

      if (
        window.turnstile &&
        turnstileWidgetId.current
      ) {
        window.turnstile.reset(turnstileWidgetId.current);
      }
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
      <Breadcrumb current="Book Bobby's Super Whip" />

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
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
                  title="Cash & Card Accepted"
                  text="We accept cash, contactless and all major card payments."
                />

                <Feature
                  icon={<MapPin size={28} />}
                  title="Local Family-Run Business"
                  text="Proudly serving Walsall and the West Midlands since 2016."
                />

                <Feature
                  icon={<PartyPopper size={28} />}
                  title="Suitable for All Events"
                  text="Birthdays, weddings, schools, nurseries, corporate events, festivals and community celebrations."
                />
              </div>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <h2 className="mb-8 text-3xl font-bold text-slate-800">
                Get My Quote
              </h2>

              {success && (
                <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-center shadow-sm">
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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
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

                <div className="relative">
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

                <div className="relative">
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

                <div className="relative">
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
                </div>

                <div className="relative">
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

                <div className="relative">
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

                <div className="relative">
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

                <div className="relative">
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
                <div className="flex justify-center pt-2">
                  <div ref={turnstileRef} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
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