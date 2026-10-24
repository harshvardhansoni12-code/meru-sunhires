"use client";

import { useMemo, useState } from "react";

const jobs = [
  {
    role: "Product Designer",
    company: "Northstar Studio",
    location: "Remote · India",
    type: "Full-time",
    category: "Design",
    description:
      "Shape useful digital products from early ideas through polished, accessible experiences.",
    initials: "N",
  },
  {
    role: "Frontend Engineer",
    company: "Fieldnote",
    location: "Bengaluru · Hybrid",
    type: "Full-time",
    category: "Engineering",
    description:
      "Build fast, thoughtful interfaces with a collaborative product and design team.",
    initials: "F",
  },
  {
    role: "People Operations Lead",
    company: "Goodkind",
    location: "Mumbai · On-site",
    type: "Full-time",
    category: "People",
    description:
      "Help a growing team make work clearer, kinder and easier to do well.",
    initials: "G",
  },
  {
    role: "Product Marketing Manager",
    company: "Orbit",
    location: "Remote · India",
    type: "Contract",
    category: "Marketing",
    description:
      "Turn customer insight into clear stories that help a useful product find its audience.",
    initials: "O",
  },
];

export default function JobSearch() {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const filteredJobs = useMemo(() => {
    const normalizedRole = role.trim().toLowerCase();
    const normalizedLocation = location.trim().toLowerCase();

    return jobs.filter((job) => {
      const roleMatches =
        !normalizedRole ||
        `${job.role} ${job.company} ${job.category}`
          .toLowerCase()
          .includes(normalizedRole);
      const locationMatches =
        !normalizedLocation ||
        job.location.toLowerCase().includes(normalizedLocation);
      const typeMatches = !type || job.type === type;

      return roleMatches && locationMatches && typeMatches;
    });
  }, [role, location, type]);

  return (
    <div className="mt-10">
      <form
        className="grid gap-4 rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm md:grid-cols-[1fr_1fr_0.8fr_auto]"
        onSubmit={(event) => event.preventDefault()}
        aria-label="Filter job listings"
      >
        <label className="block">
          <span className="mb-2 block text-xs font-bold text-[var(--navy)]">Role or keyword</span>
          <input
            type="search"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="e.g. designer"
            className="min-h-12 w-full rounded-xl border border-slate-300 px-4 text-sm text-[var(--navy)] placeholder:text-slate-400 hover:border-slate-400 focus:border-[var(--teal)] focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold text-[var(--navy)]">Location</span>
          <input
            type="search"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="City or remote"
            className="min-h-12 w-full rounded-xl border border-slate-300 px-4 text-sm text-[var(--navy)] placeholder:text-slate-400 hover:border-slate-400 focus:border-[var(--teal)] focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-bold text-[var(--navy)]">Work type</span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-[var(--navy)] hover:border-slate-400 focus:border-[var(--teal)] focus:outline-none"
          >
            <option value="">Any type</option>
            <option value="Full-time">Full-time</option>
            <option value="Contract">Contract</option>
          </select>
        </label>
        <button
          type="button"
          onClick={() => {
            setRole("");
            setLocation("");
            setType("");
          }}
          disabled={!role && !location && !type}
          className="min-h-12 self-end rounded-full bg-[var(--teal)] px-6 text-sm font-bold text-white transition-colors hover:bg-[var(--teal-dark)] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
        >
          Clear filters
        </button>
      </form>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--navy)]">
          Open roles <span className="text-sm font-medium text-slate-500">({filteredJobs.length})</span>
        </h2>
        <p className="hidden text-sm text-slate-500 sm:block">A thoughtful shortlist, updated regularly</p>
      </div>

      <div className="mt-4 space-y-4" aria-live="polite">
        {filteredJobs.length ? (
          filteredJobs.map((job) => (
            <article key={job.role} className="grid gap-5 rounded-3xl border border-[var(--line)] bg-white p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7f2ed] text-lg font-extrabold text-[var(--teal-dark)]">{job.initials}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-500">{job.company}</p>
                  <h3 className="mt-1 text-xl font-bold text-[var(--navy)]">{job.role}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                    <span className="rounded-full bg-[#f1f4f2] px-3 py-1.5">{job.location}</span>
                    <span className="rounded-full bg-[#f1f4f2] px-3 py-1.5">{job.type}</span>
                    <span className="rounded-full bg-[#f1f4f2] px-3 py-1.5">{job.category}</span>
                  </div>
                </div>
              </div>
              <a
                href="mailto:careers@surhires.example?subject=Job%20application"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-bold text-[var(--navy)] transition-colors hover:border-[var(--teal)] hover:text-[var(--teal-dark)]"
              >
                Apply by email <span aria-hidden="true" className="ml-2">↗</span>
              </a>
            </article>
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <h3 className="text-lg font-bold text-[var(--navy)]">No roles match those filters yet.</h3>
            <p className="mt-2 text-sm text-slate-600">Try a different keyword or clear your filters to see all current opportunities.</p>
          </div>
        )}
      </div>
    </div>
  );
}
