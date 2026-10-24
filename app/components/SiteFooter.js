import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Browse jobs", "/jobs"],
      ["How it works", "/#how-it-works"],
      ["Our story", "/#about"],
    ],
  },
  {
    title: "For employers",
    links: [
      ["Plans & pricing", "/employers#plans"],
      ["Post a job", "/employers#post-a-job"],
      ["Hiring guide", "/employers"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            Surhires<span className="text-[#64c7b9]">.</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Better work starts with a better connection. We help good people
            find great teams, and help great teams grow.
          </p>
          <div className="mt-5 flex gap-3" aria-label="Social media">
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs font-bold hover:bg-white/10"
            >
              in
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm hover:bg-white/10"
            >
              ◎
            </a>
            <a
              href="https://x.com/"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold hover:bg-white/10"
            >
              𝕏
            </a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-bold">{group.title}</h2>
            <ul className="mt-4 space-y-3">
              {group.links.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Surhires. All rights reserved.</p>
          <p>Made for people building what comes next.</p>
        </div>
      </div>
    </footer>
  );
}
