import Link from "next/link";
import ButtonLink from "./ButtonLink";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Tell us what matters",
    copy: "Share the role, the team and the kind of work that makes someone thrive.",
  },
  {
    number: "02",
    title: "Meet your best matches",
    copy: "Explore thoughtful matches based on skills, goals and real-world fit.",
  },
  {
    number: "03",
    title: "Make your next move",
    copy: "Start a conversation, find your people and build something meaningful.",
  },
];

const featuredRoles = [
  {
    role: "Product Designer",
    company: "Northstar Studio",
    location: "Remote · India",
    type: "Full-time",
    initials: "N",
    color: "bg-[#e7f2ed]",
  },
  {
    role: "Frontend Engineer",
    company: "Fieldnote",
    location: "Bengaluru · Hybrid",
    type: "Full-time",
    initials: "F",
    color: "bg-[#f3e9d9]",
  },
  {
    role: "People Operations Lead",
    company: "Goodkind",
    location: "Mumbai · On-site",
    type: "Full-time",
    initials: "G",
    color: "bg-[#e9e9f5]",
  },
];

const employers = [
  "orbit",
  "goodkind",
  "northstar",
  "fieldnote",
  "PAPER & CO.",
];

const questions = [
  {
    question: "Is Surhires free for job seekers?",
    answer:
      "Yes. Creating a profile, exploring roles and applying to opportunities is free for candidates.",
  },
  {
    question: "How do employers get started?",
    answer:
      "Choose a plan that fits your hiring needs, then share your role details through our simple posting form.",
  },
  {
    question: "Can I apply for remote roles?",
    answer:
      "Absolutely. Role cards clearly show location and work style, including remote, hybrid and on-site options.",
  },
];

export function HomeHero() {
  return (
    <section className="overflow-hidden bg-[#f1f5f0]">
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cbded6] bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-[var(--teal-dark)]">
            <span className="h-2 w-2 rounded-full bg-[var(--teal)]" />
            Work that fits you
          </p>
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-[var(--navy)] sm:text-6xl lg:text-[68px]">
            Great work starts with the{" "}
            <span className="text-[var(--teal)]">right people.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Find a role where you can do your best work—or meet the people who
            will move your business forward. Make your next move with Surhires.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/employers#post-a-job">
              Hire faster <span aria-hidden="true">→</span>
            </ButtonLink>
            <ButtonLink href="/jobs" variant="secondary">
              Find a job <span aria-hidden="true">↗</span>
            </ButtonLink>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3" aria-hidden="true">
              {[
                "bg-[#d48c72]",
                "bg-[#568477]",
                "bg-[#d3ad5d]",
                "bg-[#677f9c]",
              ].map((color, i) => (
                <span
                  key={i}
                  className={`h-10 w-10 rounded-full border-[3px] border-[#f1f5f0] ${color}`}
                />
              ))}
            </div>
            <p className="text-sm text-slate-600">
              <strong className="text-[var(--navy)]">2,400+</strong> people
              found their next step
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -right-4 -top-8 h-40 w-40 rounded-full bg-[#f3dba9]/60 blur-2xl" />
          <div className="absolute -bottom-7 -left-7 h-48 w-48 rounded-full bg-[#c8e1d7]/80 blur-2xl" />
          <div className="relative rounded-[32px] border border-white bg-white p-5 shadow-[0_30px_80px_rgba(17,43,60,0.13)] sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  A good match is closer
                </p>
                <h2 className="mt-1 text-lg font-bold text-[var(--navy)]">
                  Your next opportunity
                </h2>
              </div>
              <span className="rounded-full bg-[#e7f4ef] px-3 py-1.5 text-xs font-bold text-[var(--teal-dark)]">
                92% match
              </span>
            </div>
            <div className="mt-6 rounded-2xl bg-[#f7f8f5] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#dcebe4] text-lg font-extrabold text-[var(--teal-dark)]">
                  N
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--teal-dark)]">
                    NORTHSTAR STUDIO
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[var(--navy)]">
                    Product Designer
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Remote · India · Full-time
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                Shape thoughtful digital experiences with a small, curious team
                that values craft and clear thinking.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Product design", "Figma", "Research"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-[var(--navy)] p-4 text-white">
              <div>
                <p className="text-xs text-slate-300">
                  A better fit, not just another listing
                </p>
                <p className="mt-1 text-sm font-semibold">
                  Meet your next team
                </p>
              </div>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d5962] text-xl"
                aria-hidden="true"
              >
                →
              </span>
            </div>
          </div>
          <div className="absolute -right-4 top-24 hidden rounded-2xl bg-white px-4 py-3 shadow-xl sm:block">
            <span className="text-xs font-semibold text-slate-500">
              New this week
            </span>
            <p className="mt-1 text-sm font-bold text-[var(--navy)]">
              148 thoughtful teams
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="A better way forward"
          title="Good things happen when the fit is right."
          description="Finding work or finding a teammate shouldn’t feel like a numbers game. We make every step feel a little more human."
          centered
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-[var(--line)] bg-white p-7"
            >
              <p className="text-sm font-extrabold tracking-widest text-[var(--teal)]">
                {step.number}
              </p>
              <h3 className="mt-8 text-xl font-bold text-[var(--navy)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmployerStrip() {
  return (
    <section
      aria-label="Teams hiring with Surhires"
      className="border-y border-[var(--line)] bg-white py-10"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          Good teams are already finding their people
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-lg font-extrabold tracking-tight text-slate-400 sm:justify-between">
          {employers.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedRoles() {
  return (
    <section className="bg-[var(--warm)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="A few good places to start"
            title="Roles with room to grow."
            description="Real opportunities from teams that care about the work—and the people doing it."
          />
          <ButtonLink
            href="/jobs"
            variant="secondary"
            className="self-start sm:self-auto"
          >
            See all jobs <span aria-hidden="true">→</span>
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featuredRoles.map((role) => (
            <article
              key={role.role}
              className="rounded-3xl border border-[var(--line)] bg-white p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-extrabold text-[var(--navy)] ${role.color}`}
                >
                  {role.initials}
                </span>
                <span className="rounded-full bg-[#edf6f2] px-3 py-1.5 text-xs font-bold text-[var(--teal-dark)]">
                  {role.type}
                </span>
              </div>
              <p className="mt-6 text-sm font-semibold text-slate-500">
                {role.company}
              </p>
              <h3 className="mt-1 text-xl font-bold text-[var(--navy)]">
                {role.role}
              </h3>
              <p className="mt-3 text-sm text-slate-500">{role.location}</p>
              <Link
                href="/jobs"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--teal-dark)] hover:gap-3"
              >
                View opportunity <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <SectionHeading
          eyebrow="Stories from both sides"
          title="The best part is what happens next."
          description="A good match changes more than a job title. It changes the way Monday morning feels."
        />
        <figure className="rounded-[32px] bg-[var(--navy)] p-8 text-white sm:p-12">
          <div
            className="text-3xl tracking-[0.2em] text-[#e8bd65]"
            aria-label="5 out of 5 stars"
          >
            ★★★★★
          </div>
          <blockquote className="mt-6 text-2xl font-semibold leading-relaxed sm:text-3xl">
            “For the first time, the role felt like it was written for the way I
            actually work. Three months in, I still feel that way.”
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#46736d] font-bold">
              AM
            </span>
            <span>
              <span className="block text-sm font-bold">Aarav Mehta</span>
              <span className="mt-1 block text-xs text-slate-300">
                Product Designer · Northstar Studio
              </span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function FrequentlyAskedQuestions() {
  return (
    <section className="bg-[#f1f5f0] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Good to know"
          title="A few things you might be wondering."
          description="Still have a question? Get in touch and our team will point you in the right direction."
        />
        <div className="space-y-3">
          {questions.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-[#dce5df] bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[var(--navy)] [&::-webkit-details-marker]:hidden">
                {question}
                <span
                  className="text-xl text-[var(--teal)] transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pr-8 text-sm leading-6 text-[var(--muted)]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCallToAction() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[32px] bg-[var(--teal)] px-7 py-10 text-white sm:px-12 sm:py-14 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
            Your next chapter starts here
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to find your right fit?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">
            Whether you’re building a team or building your career, your next
            good thing is one conversation away.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/jobs" variant="light">
            Find a job
          </ButtonLink>
          <ButtonLink
            href="/employers#post-a-job"
            className="border border-white/40 bg-transparent text-white hover:bg-white/10"
          >
            Hire with us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
