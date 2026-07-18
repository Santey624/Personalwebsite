import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { siteConfig, researchProjects } from "@/data/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = `Official personal website of Santosh Gaire Sharma — AI Engineer & NLP Researcher at Doshisha University (Osaka, Japan) and member of LLM-jp (NII). Research in NLP, low-resource languages, multilingual models, medical AI, and AI safety. Builder of GharKatha (gharkatha.com).`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "santoshgairesharma",
    template: `%s | santoshgairesharma`,
  },
  description,
  applicationName: "Santosh Gaire Sharma",
  keywords: [
    "Santosh Gaire Sharma",
    "Santosh Gaire",
    "Santosh Sharma",
    "santoshgairesharma",
    "Santosh Gaire Sharma Doshisha",
    "Santosh Gaire Sharma Osaka",
    "Santosh Gaire Sharma Nepal",
    "AI Engineer Santosh Gaire Sharma",
    "NLP Researcher Santosh Gaire Sharma",
    "Doshisha University",
    "CCILAB",
    "low-resource languages",
    "multilingual models",
    "medical AI",
    "AI safety",
    "LLM-jp",
    "Japanese LLM",
    "NepMedJP",
    "GharKatha",
    "gharkatha.com",
    "cross-lingual summarization",
  ],
  authors: [{ name: "Santosh Gaire Sharma", url: siteConfig.siteUrl }],
  creator: "Santosh Gaire Sharma",
  publisher: "Santosh Gaire Sharma",
  category: "Personal Website",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: "Santosh Gaire Sharma",
    title: "Santosh Gaire Sharma | AI Engineer & NLP Researcher",
    description,
    firstName: "Santosh",
    lastName: "Gaire Sharma",
    username: "santoshgairesharma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santosh Gaire Sharma | AI Engineer & NLP Researcher",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function JsonLd() {
  const sameAs = [
    siteConfig.githubUrl,
    siteConfig.linkedinUrl,
    "https://gharkatha.com",
    "https://llm-jp.nii.ac.jp/en/home-en/",
    siteConfig.googleScholarUrl,
    siteConfig.orcidUrl,
  ].filter(Boolean);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: "Santosh Gaire Sharma",
    alternateName: [
      "Santosh Gaire",
      "Santosh Sharma",
      "santoshgairesharma",
      "Santey624",
    ],
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${siteConfig.photo}`,
    jobTitle: "AI Engineer & NLP Researcher",
    description,
    email: siteConfig.email,
    nationality: "Nepalese",
    knowsLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Nepali" },
      {
        "@type": "Language",
        name: "Japanese",
        alternateName: "JLPT N4 · preparing for N3 by 2027",
      },
    ],
    homeLocation: {
      "@type": "Place",
      name: "Osaka, Japan",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Osaka",
        addressCountry: "JP",
      },
    },
    sameAs,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Doshisha University",
        sameAs: "https://www.doshisha.ac.jp/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Tribhuvan University",
      },
    ],
    affiliation: [
      {
        "@type": "CollegeOrUniversity",
        name: "Doshisha University",
      },
      {
        "@type": "Organization",
        name: "LLM-jp",
        url: "https://llm-jp.nii.ac.jp/en/home-en/",
        description:
          "Cross-organizational project for open Japanese large language model research and development, organized by NII.",
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "LLM-jp",
      url: "https://llm-jp.nii.ac.jp/en/home-en/",
    },
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Doshisha University",
    },
    knowsAbout: [
      "Santosh Gaire Sharma",
      "Natural Language Processing",
      "Low-resource languages",
      "Multilingual models",
      "Japanese large language models",
      "LLM-jp",
      "Medical AI",
      "AI Safety",
      "Cross-lingual summarization",
      "Data Science",
      "Machine Learning",
      "Agentic AI",
      "Large Language Models",
      "Diffusion models",
      "GharKatha",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    name: "Santosh Gaire Sharma",
    alternateName: "Santosh Gaire Sharma Official Website",
    url: siteConfig.siteUrl,
    description,
    inLanguage: "en",
    publisher: { "@id": `${siteConfig.siteUrl}/#person` },
    author: { "@id": `${siteConfig.siteUrl}/#person` },
    about: { "@id": `${siteConfig.siteUrl}/#person` },
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.siteUrl}/#profilepage`,
    url: siteConfig.siteUrl,
    name: "Santosh Gaire Sharma — Official Personal Website",
    mainEntity: { "@id": `${siteConfig.siteUrl}/#person` },
    about: { "@id": `${siteConfig.siteUrl}/#person` },
  };

  const projects = researchProjects
    .filter((p) => p.liveUrl || p.githubUrl || p.paperUrl)
    .map((p) => ({
      "@type": "SoftwareApplication",
      name: p.title,
      description: p.description,
      url: p.liveUrl || p.githubUrl || p.paperUrl,
      author: { "@id": `${siteConfig.siteUrl}/#person` },
      applicationCategory: "Research",
    }));

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Santosh Gaire Sharma",
    itemListElement: projects.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item,
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
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
