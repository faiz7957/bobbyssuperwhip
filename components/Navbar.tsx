"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <>
      <style>{`
        .bobbys-logo {
          left: -250px;
          top: 0;
          width: 150px;
          height: 150px;
        }

        .bobbys-logo img {
          width: 150px;
          height: 150px;
        }

        /* Smaller desktop / windowed Chrome */
        @media (max-width: 1100px) and (min-width: 768px) {
          .bobbys-logo {
            left: 0 !important;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .bobbys-logo {
            left: 0 !important;
            top: 20px !important;
            width: 100px !important;
            height: 100px !important;
          }

          .bobbys-logo img {
            width: 100px !important;
            height: 100px !important;
          }
        }
      `}</style>

      <header
        style={{
          position: "relative",
          zIndex: 9999,
          width: "100%",
          height: "80px",
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1060px",
            height: "80px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* =====================================================
              LOGO
              ===================================================== */}

          <Link
            href="/"
            aria-label="Bobby's Super Whip Home"
            className="bobbys-logo"
            style={{
              position: "absolute",
              zIndex: 10000,
              display: "block",
            }}
          >
            <img
              src="/images/bobbys-super-whip-logo.png"
              alt="Bobby's Super Whip"
              width="150"
              height="150"
              style={{
                display: "block",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
              ===================================================== */}

          <nav
            className="hidden md:flex"
            style={{
              marginLeft: "auto",
              alignItems: "center",
              gap: "32px",
            }}
          >
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

          {/* =====================================================
              MOBILE MENU BUTTON
              ===================================================== */}

          <button
            className="ml-auto md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-7 w-7 text-slate-700" />
            ) : (
              <Menu className="h-7 w-7 text-slate-700" />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
            ===================================================== */}

        {isOpen && (
          <div className="border-t border-slate-200 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col px-6 pt-10 pb-5">
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
    </>
  );
}