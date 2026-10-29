import type { Metadata } from "next";
import "./styles.scss";
const description = "Jitendra Mehra is a developer learning, building, and growing toward backend engineering with Django and real-world software projects.";
const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = publicSiteUrl ? new URL(publicSiteUrl) : undefined;
const socialImage = publicSiteUrl ? new URL("/jitendra-mehra.png", publicSiteUrl).toString() : undefined;
export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: "Jitendra Mehra — Developer in Progress",
  description,
  openGraph: { title: "Jitendra Mehra — Developer in Progress", description, type: "profile", ...(socialImage ? { images: [socialImage] } : {}) },
  twitter: { card: "summary_large_image", title: "Jitendra Mehra — Developer in Progress", description, ...(socialImage ? { images: [socialImage] } : {}) },
  robots: { index: true, follow: true }
};
const person = { "@context": "https://schema.org", "@type": "Person", name: "Jitendra Mehra", description, knowsAbout: ["Full-stack web development", "Backend development", "Django", "Software development", "Artificial intelligence", "Machine learning"], sameAs: ["https://github.com/Jitendramehra07", "https://x.com/Jitendra9363"] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} /></body></html>; }