"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-blue-700"
        >
          Bobby&apos;s <span className="text-yellow-400">Super Whip</span>
        </Link>

        <nav className="hidden items-center gap-8 font-semibold text-slate-700 md:flex">
          <Link href="/">Home</Link>

          <a href="/#treats">Treats</a>

          <a href="/#gallery">Gallery</a>

          <a href="/#events">Events</a>

          <a href="/#contact">Contact</a>

          <Link
            href="/book"
            className="rounded-full bg-yellow-400 px-5 py-2 text-slate-900 transition hover:bg-yellow-300"
          >
            Book Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t bg-white shadow-lg md:hidden">
          <Link
            className="block border-b px-6 py-4"
            href="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <a
            className="block border-b px-6 py-4"
            href="/#treats"
            onClick={() => setOpen(false)}
          >
            Treats
          </a>

          <a
            className="block border-b px-6 py-4"
            href="/#gallery"
            onClick={() => setOpen(false)}
          >
            Gallery
          </a>

          <a
            className="block border-b px-6 py-4"
            href="/#events"
            onClick={() => setOpen(false)}
          >
            Events
          </a>

          <a
            className="block border-b px-6 py-4"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>

          <Link
            className="m-4 block rounded-full bg-yellow-400 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-yellow-300"
            href="/book"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}