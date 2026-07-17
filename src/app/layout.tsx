import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { siteConfig } from "@/data/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = `${siteConfig.name} — ${siteConfig.title} at Doshisha University, Kyoto. Research in NLP, cross-lingual medical summarization, diffusion models for HAR, agentic AI, and data science.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "Santosh Gaire Sharma",
    "Santosh Gaire",
    "AI Engineer",
    "NLP Researcher",
    "Doshisha University",
    "low-resource languages",
    "multilingual models",
    "medical AI",
    "AI safety",
    "data science",
    "agentic AI",
    "healthcare NLP",
    "NepMedJP",
    "cross-lingual summarization",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const sameAs = [
    siteConfig.githubUrl,
    siteConfig.linkedinUrl,
    siteConfig.googleScholarUrl,
    siteConfig.orcidUrl,
  ].filter(Boolean);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${siteConfig.photo}`,
    jobTitle: siteConfig.title,
    email: siteConfig.email,
    sameAs,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Doshisha University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Tribhuvan University",
      },
    ],
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Doshisha University",
    },
    knowsAbout: [
      "Natural Language Processing",
      "Low-resource languages",
      "Multilingual models",
      "Medical AI",
      "AI Safety",
      "Cross-lingual summarization",
      "Data Science",
      "Machine Learning",
      "Agentic AI",
      "Large Language Models",
      "Diffusion models",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description,
    author: { "@type": "Person", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
