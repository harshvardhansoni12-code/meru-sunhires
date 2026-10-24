import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}) {
  const styles =
    variant === "secondary"
      ? "border border-slate-300 bg-white text-[var(--navy)] hover:border-[var(--teal)] hover:text-[var(--teal-dark)]"
      : variant === "light"
        ? "bg-white text-[var(--navy)] hover:bg-[#eaf5f2]"
        : "bg-[var(--teal)] text-white hover:bg-[var(--teal-dark)]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors active:scale-[0.98] ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
