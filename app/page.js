import {
  EmployerStrip,
  FeaturedRoles,
  FinalCallToAction,
  FrequentlyAskedQuestions,
  HomeHero,
  HowItWorks,
  Testimonials,
} from "./components/HomeSections";

export const metadata = {
  title: "Find your right fit",
  description:
    "Hire faster or find a job where you can do your best work. Meet the right people and teams with Surhires.",
  openGraph: {
    title: "Surhires | Find your right fit",
    description:
      "A more human way to connect great people with the teams that need them.",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <EmployerStrip />
      <HowItWorks />
      <FeaturedRoles />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <FinalCallToAction />
    </>
  );
}
