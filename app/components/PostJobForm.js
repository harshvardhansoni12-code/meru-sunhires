"use client";

import { useState } from "react";

export default function PostJobForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8"
    >
      {submitted ? (
        <div role="status" className="rounded-2xl border border-[#b6d9ca] bg-[#eff8f3] p-5">
          <h2 className="font-bold text-[var(--navy)]">Thanks — your role is ready for its next step.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            This is a frontend demo, so nothing was sent. Our team would be in touch to help you find your next great hire.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 text-sm font-bold text-[var(--teal-dark)] underline underline-offset-4 hover:text-[var(--navy)]"
          >
            Submit another role
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-[var(--navy)]">
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                placeholder="e.g. Aanya Sharma"
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 px-4 font-normal placeholder:text-slate-400 hover:border-slate-400 focus:border-[var(--teal)] focus:outline-none"
              />
            </label>
            <label className="text-sm font-semibold text-[var(--navy)]">
              Work email
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@company.com"
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 px-4 font-normal placeholder:text-slate-400 hover:border-slate-400 focus:border-[var(--teal)] focus:outline-none"
              />
            </label>
            <label className="text-sm font-semibold text-[var(--navy)]">
              Company
              <input
                name="company"
                autoComplete="organization"
                required
                placeholder="Your team name"
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 px-4 font-normal placeholder:text-slate-400 hover:border-slate-400 focus:border-[var(--teal)] focus:outline-none"
              />
            </label>
            <label className="text-sm font-semibold text-[var(--navy)]">
              Role title
              <input
                name="role"
                required
                placeholder="e.g. Product Designer"
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 px-4 font-normal placeholder:text-slate-400 hover:border-slate-400 focus:border-[var(--teal)] focus:outline-none"
              />
            </label>
            <label className="text-sm font-semibold text-[var(--navy)] sm:col-span-2">
              A little about the role
              <textarea
                name="description"
                required
                minLength={20}
                rows={4}
                placeholder="What will this person work on, and what would help them thrive on your team?"
                className="mt-2 w-full resize-y rounded-xl border border-slate-300 px-4 py-3 font-normal leading-6 placeholder:text-slate-400 hover:border-slate-400 focus:border-[var(--teal)] focus:outline-none"
              />
              <span className="mt-1 block text-xs font-normal text-slate-500">Please enter at least 20 characters.</span>
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--teal)] px-6 text-sm font-bold text-white transition-colors hover:bg-[var(--teal-dark)] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Preview job post <span aria-hidden="true" className="ml-2">→</span>
          </button>
        </>
      )}
    </form>
  );
}
