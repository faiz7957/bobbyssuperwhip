"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Why Bobby's?", href: "/why-choose-bobbys" },
  { name: "Customer Favourites", href: "/#gallery" },
  { name: "Events", href: "/#events" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-2xl shadow-lg">
            🍦
          </div>

          <div className="flex flex-col leading-none">
            <span
              className={`${fredoka.className} text-3xl font-bold text-sky-600`}
            >
              Bobby&apos;s
            </span>

            <span
              className={`${fredoka.className} -mt-1 text-sm font-bold uppercase tracking-[0.35em] text-amber-400`}
            >
              SUPER WHIP
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-slate-700 transition-colors hover:text-sky-600"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/book"
            className="rounded-full bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-7 w-7 text-slate-700" />
          ) : (
            <Menu className="h-7 w-7 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-lg font-medium text-slate-700 hover:text-sky-600"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-sky-600 py-3 text-center font-semibold text-white hover:bg-sky-700"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}