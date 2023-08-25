import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Source GitHub Contributions API",
  description: "Access GitHub contributions through a user-friendly API.",
  openGraph: {
    title: "Open Source GitHub Contributions API",
    description: "Access GitHub contributions through a user-friendly API.",
    url: process.env.VERCEL_URL || "https://example.com",
    type: "website",
    siteName: "Open Source GitHub Contributions API",
  },
  twitter: {
    title: "Open Source GitHub Contributions API",
    description: "Access GitHub contributions through a user-friendly API.",
    card: "summary_large_image",
    site: "@adomaitisc",
    creator: "@adomaitisc",
  },
  generator: "Vercel",
  applicationName: "Open Source GitHub Contributions API",
  referrer: "origin-when-cross-origin",
  keywords: [
    "GitHub API",
    "Open Source",
    "Developer",
    "API Integration",
    "GitHub Contributions",
    "Code Insights",
    "Developer Tools",
    "REST API",
    "API Access",
    "GitHub Data",
    "GitHub Activity",
    "Contributions Tracking",
    "GitHub Analytics",
    "API Services",
    "GitHub Insights",
    "Data Access",
    "Web Development",
    "API Development",
    "Programming",
    "Version Control",
    "Pull Requests",
    "Issues Tracking",
    "Code Collaboration",
    "Coding Community",
    "Open Source Projects",
    "Software Development",
    "Programming Tools",
    "Collaborative Coding",
    "GitHub Access",
  ],
  category: "developer",
  // manifest: "/manifest.json",
  authors: { name: "Cauã Adomaitis", url: "https://adomaitisc.com" },
  colorScheme: "light",
  themeColor: "#f4f4f5",
  creator: "Cauã Adomaitis",
  publisher: "Cauã Adomaitis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
