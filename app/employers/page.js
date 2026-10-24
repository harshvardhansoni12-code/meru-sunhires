import ButtonLink from "../components/ButtonLink";
import SectionHeading from "../components/SectionHeading";
import PostJobForm from "../components/PostJobForm";

export const metadata = {
  title: "Hiring solutions for growing teams",
  description:
    "Meet your next great hire with Surhires. Compare simple hiring plans and tell us about the role you need to fill.",
  openGraph: {
    title: "Hire thoughtfully with Surhires",
    description:
      "Hiring plans made for growing teams, from your first key hire to your next stage of growth.",
  },
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "A simple place to start your search.",
    features: ["1 active job listing", "Basic candidate matching", "30-day listing"],
    cta: "Start for free",
  },
  {
    name: "Growth",
    price: "₹4,999",
    cadence: "/ listing",
    description: "For teams ready to make their next few hires.",
    features: ["Up to 5 active listings", "Priority role visibility", "Shortlist tools"],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Partner",
    price: "Let’s talk",
    description: "A more hands-on approach for growing teams.",
    features: ["Flexible hiring volume", "Dedicated hiring support", "Custom team insights"],
    cta: "Talk to our team",
  },
];

export default function EmployersPage() {
  return (
    <>
      <section className="bg-[#f1f5f0]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--teal-dark)]">For teams that care about fit</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-[var(--navy)] sm:text-6xl">
              Hire faster. Build a team that lasts.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Spend less time sorting applications and more time meeting people
              who can make a real difference to your team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#post-a-job">Post a job <span aria-hidden="true">→</span></ButtonLink>
              <ButtonLink href="#plans" variant="secondary">Compare plans</ButtonLink>
            </div>
          </div>
          <div className="rounded-[32px] bg-[var(--navy)] p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9bd8ca]">Hiring, with the noise turned down</p>
            <div className="mt-7 space-y-4">
              {[
                ["Less searching", "Start with people whose experience fits the role."],
                ["Better conversations", "Clear expectations help both sides show up well."],
                ["A stronger team", "Focus on long-term fit, not just a fast fill."],
              ].map(([title, text], index) => (
                <div key={title} className="flex gap-4 rounded-2xl bg-white/10 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2e5a61] text-sm font-bold">{index + 1}</span>
                  <div>
                    <h2 className="font-bold">{title}</h2>
                    <p className="mt-1 text-sm leading-5 text-slate-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Straightforward plans"
            title="The right support for your next hire."
            description="Choose a clear starting point. Every plan is designed to help you meet candidates with the skills and mindset your team needs."
            centered
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`relative rounded-3xl border p-7 ${plan.featured ? "border-[var(--teal)] bg-[#f2faf7] shadow-lg shadow-[#087e7814]" : "border-[var(--line)] bg-white"}`}>
                {plan.featured ? <span className="absolute right-6 top-6 rounded-full bg-[var(--teal)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Popular</span> : null}
                <h2 className="text-lg font-bold text-[var(--navy)]">{plan.name}</h2>
                <p className="mt-2 min-h-10 max-w-[230px] text-sm leading-5 text-[var(--muted)]">{plan.description}</p>
                <p className="mt-6 text-3xl font-extrabold tracking-tight text-[var(--navy)]">
                  {plan.price}<span className="text-sm font-medium text-slate-500">{plan.cadence}</span>
                </p>
                <ul className="mt-7 space-y-3 border-t border-[var(--line)] pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate-700">
                      <span className="font-bold text-[var(--teal)]" aria-hidden="true">✓</span>{feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="#post-a-job" variant={plan.featured ? "primary" : "secondary"} className="mt-8 w-full">{plan.cta}</ButtonLink>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-slate-500">Demo pricing for this frontend assignment. No payment is collected.</p>
        </div>
      </section>

      <section id="post-a-job" className="scroll-mt-24 bg-[var(--warm)] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Let’s get started"
              title="Tell us who you’re looking for."
              description="Share a few details about your team and role. We’ll help you take the next step."
            />
            <p className="mt-8 text-sm leading-6 text-slate-600">
              This demo form validates your details in the browser only. It
              doesn’t send or store your information.
            </p>
          </div>
          <PostJobForm />
        </div>
      </section>
    </>
  );
}
