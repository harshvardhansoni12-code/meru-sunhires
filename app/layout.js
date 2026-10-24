import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export const metadata = {
  title: {
    default: "Surhires | Hiring that moves your business forward",
    template: "%s | Surhires",
  },
  description:
    "Find the right people or your next opportunity with Surhires, a thoughtful hiring platform for ambitious teams and job seekers.",
  openGraph: {
    title: "Surhires | Hiring that moves your business forward",
    description:
      "A more human way to connect great people with the teams that need them.",
    siteName: "Surhires",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
