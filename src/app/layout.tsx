import type { Metadata } from "next";
import "./globals.css";
import { organizationJsonLd, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Save The Foster | Supporting Foster Youth",
    template: "%s | Save The Foster",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Save The Foster",
    "foster children nonprofit",
    "humanitarian nonprofit",
    "orphan support",
    "children charity",
    "Bay Area nonprofit",
    "cleft surgery mission",
    "Ukraine orphan relief",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "nonprofit",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: "Save The Foster | Supporting Foster Youth",
    description: siteConfig.description,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Save The Foster nonprofit supporting foster youth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Save The Foster | Supporting Foster Youth",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-white px-4 py-2 text-[#1e2029] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
