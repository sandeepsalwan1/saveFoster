import type { Metadata } from "next";

export const siteConfig = {
  name: "Save The Foster",
  url: "https://savethefoster.com",
  email: "savethefoster@gmail.com",
  description:
    "Save The Foster is a Bay Area nonprofit supporting foster youth, vulnerable children, and humanitarian projects locally and globally.",
  donationUrl: "https://paypal.me/SaveTheFoster",
  social: {
    instagram: "https://www.instagram.com/savethefoster",
    facebook: "https://www.facebook.com/Save-The-Foster-112121588205964",
  },
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
  foundingDate: "2022",
  areaServed: [
    { "@type": "AdministrativeArea", name: "San Francisco Bay Area" },
    { "@type": "Place", name: "Global humanitarian communities" },
  ],
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  nonprofitStatus: "https://schema.org/Nonprofit501c3",
  founder: [
    {
      "@type": "Person",
      name: "Sonia Salwan",
      jobTitle: ["Founder", "Veterinarian"],
      image: `${siteConfig.url}/images/founder/sonia-salwan.webp`,
    },
    {
      "@type": "Person",
      name: "Shanima Salwan",
      jobTitle: "Co-Founder",
      image: `${siteConfig.url}/images/founder/shanima-salwan.webp`,
    },
  ],
  potentialAction: {
    "@type": "DonateAction",
    target: siteConfig.donationUrl,
    recipient: {
      "@type": "NGO",
      name: siteConfig.name,
    },
  },
};

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} nonprofit supporting foster youth`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
