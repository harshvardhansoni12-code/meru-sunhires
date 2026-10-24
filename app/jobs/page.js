import JobSearch from "../components/JobSearch";

export const metadata = {
  title: "Find a job",
  description:
    "Explore thoughtful opportunities from teams that value good work, clear communication and people who care.",
  openGraph: {
    title: "Find your next role | Surhires",
    description:
      "Browse curated full-time opportunities across product, engineering, people and more.",
  },
};

export default function JobsPage() {
  return (
    <section className="bg-[var(--warm)]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--teal-dark)]">
          Your next chapter
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-[var(--navy)] sm:text-5xl">
          Find work that feels like a good fit.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
          Explore roles with teams that value thoughtful work, good people and
          the space to do your best.
        </p>
        <JobSearch />
      </div>
    </section>
  );
}
