"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Find a job" },
  { href: "/employers", label: "For employers" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="Surhires home"
          className="flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--teal)] text-lg font-black text-white">
            s
          </span>
          <span className="text-xl font-extrabold tracking-tight text-[var(--navy)]">
            Surhires<span className="text-[var(--teal)]">.</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map(({ href, label }) => {
            const current =
              href === "/"
                ? pathname === "/"
                : href.startsWith("/#")
                  ? false
                  : pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={current ? "page" : undefined}
                className={`text-sm font-semibold transition-colors hover:text-[var(--teal-dark)] ${
                  current ? "text-[var(--teal-dark)]" : "text-slate-600"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/employers#post-a-job"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--teal)] px-5 text-sm font-bold text-white transition-colors hover:bg-[var(--teal-dark)] active:scale-[0.98]"
          >
            Post a job
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-xl text-[var(--navy)] transition-colors hover:bg-[var(--warm)] lg:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[var(--line)] bg-[var(--background)] px-5 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--navy)] hover:bg-[var(--warm)]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/employers#post-a-job"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[var(--teal)] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[var(--teal-dark)]"
            >
              Post a job
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
