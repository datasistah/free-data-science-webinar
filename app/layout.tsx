// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const title = "Breaking the Data Science Barrier | Data Sistah";
const description =
  "Watch the free training recording and subscribe for practical data science career strategy, templates, and future trainings.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Data Sistah",
  metadataBase: new URL("https://www.data-sistah.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "Data Sistah",
    // If/when you add an OG image, uncomment and update:
    // images: [{ url: "/images/og-webinar.png", width: 1200, height: 630, alt: "Breaking the Data Science Barrier" }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // If/when you add an OG image, uncomment:
    // images: ["/images/og-webinar.png"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
