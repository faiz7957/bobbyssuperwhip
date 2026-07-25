"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20 shadow-sm z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-extrabold text-blue-700 tracking-tight">
          Bobby&apos;s <span className="text-yellow-400">Super Whip</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700">
          <a href="#">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#booking">Book Us</a>
          <a href="#contact">Contact</a>
          <a
            href="#booking"
            className="rounded-full bg-yellow-400 px-5 py-2 text-slate-900 transition hover:bg-yellow-300"
          >
            Book Now
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <a className="block px-6 py-4 border-b" href="#" onClick={() => setOpen(false)}>Home</a>
          <a className="block px-6 py-4 border-b" href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a className="block px-6 py-4 border-b" href="#booking" onClick={() => setOpen(false)}>Book Us</a>
          <a className="block px-6 py-4 border-b" href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a
            className="block m-4 rounded-full bg-yellow-400 px-6 py-3 text-center font-semibold text-slate-900"
            href="#booking"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
