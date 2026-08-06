import type { Metadata } from "next";

export const siteConfig = {
  name: "Save The Foster",
  url: "https://savethefoster.com",
  email: "savethefoster@gmail.com",
  description:
    "Save The Foster is a Bay Area nonprofit supporting foster youth, vulnerable children, and humanitarian projects locally and globally.",
  donationUrl: "https://www.paypal.com/paypalme/SaveTheFoster",
  social: {
    instagram: "https://www.instagram.com/savethefoster",
    facebook: "https://www.facebook.com/Save-The-Foster-112121588205964",
  },
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/images/save-the-foster-logo.png`,
    width: 512,
    height: 512,
  },
  image: `${siteConfig.url}/opengraph-image`,
  email: siteConfig.email,
  description: siteConfig.description,
  foundingDate: "2022",
  areaServed: [
    { "@type": "AdministrativeArea", name: "San Francisco Bay Area" },
    { "@type": "Place", name: "Global humanitarian communities" },
  ],
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  nonprofitStatus: "https://schema.org/Nonprofit501c3",
  founder: {
    "@type": "Person",
    "@id": `${siteConfig.url}/about#sonia-salwan`,
    name: "Sonia Salwan",
    url: `${siteConfig.url}/about`,
    jobTitle: ["Founder", "Veterinarian"],
    image: `${siteConfig.url}/images/founder/sonia-salwan.webp`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "volunteer and donation inquiries",
    availableLanguage: "English",
  },
  potentialAction: {
    "@type": "DonateAction",
    target: siteConfig.donationUrl,
    recipient: {
      "@type": "NGO",
      name: siteConfig.name,
    },
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  alternateName: "savethefoster.com",
  url: siteConfig.url,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

export const founderProfileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/about#profile-page`,
  url: `${siteConfig.url}/about`,
  name: "Sonia Salwan, Founder of Save The Foster",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteConfig.url}/about#sonia-salwan`,
    name: "Sonia Salwan",
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}/images/founder/sonia-salwan.webp`,
    jobTitle: ["Founder", "Veterinarian"],
    description:
      "Founder of Save The Foster and a veterinarian supporting children and humanitarian projects locally and globally.",
    worksFor: {
      "@id": `${siteConfig.url}/#organization`,
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
