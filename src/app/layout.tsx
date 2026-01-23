import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holiday Insurance - Compare Holiday Insurance Cover Online",
  description: "Get affordable holiday insurance for your next trip. Compare travel and holiday insurance policies for single trips and annual cover.",
  keywords: ["holiday insurance", "travel insurance", "holiday cover", "trip insurance UK", "annual holiday insurance"],
  openGraph: {
    title: "Holiday Insurance - Compare Holiday Insurance Cover Online",
    description: "Get affordable holiday insurance for your next trip. Compare travel and holiday insurance policies for single trips and annual cover.",
    url: "https://holidayinsurance.quest",
    siteName: "Holiday Insurance",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Insurance - Compare Holiday Insurance Cover Online",
    description: "Get affordable holiday insurance for your next trip. Compare travel and holiday insurance policies for single trips and annual cover.",
  },
  alternates: { canonical: "https://holidayinsurance.quest" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Holiday Insurance",
              url: "https://holidayinsurance.quest",
              description: "Get affordable holiday insurance for your next trip. Compare travel and holiday insurance policies for single trips and annual cover.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
