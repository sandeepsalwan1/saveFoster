import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Humanitarian Projects & Community Impact",
  description:
    "Explore Save The Foster projects supporting foster youth, cleft surgery missions in Bangladesh and India, and orphan care facilities in Ukraine.",
  path: "/projects",
});

/* ------------------------------------------------------------------ */
/*  Data – add future projects here                                    */
/* ------------------------------------------------------------------ */

const projects = [
  {
    id: "bangladesh-2025",
    title: "Bangladesh Cleft Surgery Mission",
    partner: "Rotaplast International",
    date: "2025",
    description:
      "Save The Foster partnered with Rotaplast International to support free cleft lip and palate surgeries for children in Bangladesh.",
    images: [
      { src: "/images/bangladesh/mother-and-child.jpg", alt: "Mother holding her child before cleft surgery in Bangladesh" },
      { src: "/images/bangladesh/child-after-surgery.jpg", alt: "Child smiling after successful cleft surgery" },
      { src: "/images/bangladesh/rotaplast-volunteer.jpg", alt: "Rotaplast volunteer embracing a mother and baby" },
    ],
  },
  {
    id: "rotaplast-suture-donation-2024",
    title: "Surgical Suture Donation",
    partner: "Rotaplast International",
    date: "September 2024",
    description:
      "Save The Foster donated surgical sutures to Rotaplast International to support life-changing cleft lip and palate surgeries for children in need.",
    images: [
      {
        src: "/images/projects/rotaplast-suture-donation/suture-donation-team.webp",
        alt: "Save The Foster volunteers presenting donated surgical sutures to Rotaplast International",
      },
    ],
  },
  {
    id: "foster-family-support-town-hall",
    title: "Foster Family Support & Resource Outreach",
    partner: "Community Partners",
    date: "Bay Area",
    description:
      "Save The Foster participated in a Foster Family Support Town Hall alongside community organizations including CASA and Hively, connecting families and advocates with resources that support children in foster care.",
    images: [
      {
        src: "/images/projects/foster-family-support-town-hall/town-hall-speakers.webp",
        alt: "Save The Foster representative at a Foster Family Support Town Hall",
      },
      {
        src: "/images/projects/foster-family-support-town-hall/casa-community-partner.webp",
        alt: "CASA community resource table at the Foster Family Support Town Hall",
      },
      {
        src: "/images/projects/foster-family-support-town-hall/hively-community-partner.webp",
        alt: "Hively community resource table at the Foster Family Support Town Hall",
      },
    ],
  },
  {
    id: "faridabad-cleft-surgery-mission",
    title: "Cleft Lip and Palate Surgery Mission",
    partner: "Faridabad, India",
    date: "Humanitarian Mission",
    description:
      "Save The Foster participated in a cleft lip surgery mission in Faridabad, India, supporting life-changing cleft lip and palate surgeries for children in need.",
    images: [
      {
        src: "/images/projects/faridabad-cleft-surgery/mission-team.webp",
        alt: "Save The Foster with families and medical staff at the Faridabad cleft surgery mission",
        layout: "wide",
      },
      {
        src: "/images/projects/cleft-care/mother-and-child-hospital.webp",
        alt: "Mother holding her child during a cleft surgery mission in Faridabad, India",
      },
      {
        src: "/images/projects/cleft-care/mother-and-child-portrait.webp",
        alt: "Mother and child supported during the Faridabad cleft surgery mission",
      },
    ],
  },
  {
    id: "humanitarian-community-gala",
    title: "Humanitarian Partnership & Community Recognition",
    partner: "Community Engagement",
    date: "Community Partnership",
    description:
      "Save The Foster joined community and humanitarian leaders at a recognition gathering, strengthening relationships and building partnerships that can expand support for children and families in need.",
    images: [
      {
        src: "/images/projects/community-gala/humanitarian-awards-gala.webp",
        alt: "Save The Foster with community and humanitarian leaders at a recognition gathering",
      },
    ],
  },
  {
    id: "ukraine-generators-2023",
    title: "Power for Orphan Care Facilities in Ukraine",
    partner: "Ukraine Humanitarian Relief",
    date: "January 2023",
    description:
      "Save The Foster helped raise funds to provide generators for facilities caring for orphaned children in Ukraine, helping ensure they had access to essential power during a time of crisis.",
    images: [
      {
        src: "/images/projects/ukraine-generators-2023.webp",
        alt: "Supporters at a fundraiser providing generators for orphan care facilities in Ukraine",
      },
    ],
  },
  // ── Add future projects below this line ──
];

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Save The Foster Humanitarian Projects",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      image: `${siteConfig.url}${project.images[0].src}`,
      url: `${siteConfig.url}/projects#${project.id}`,
    },
  })),
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Projects() {
  return (
    <main id="main-content" className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      {/* Hero */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base text-gray-600 mb-2">Working Towards a Better Tomorrow</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2f3257] mb-3">Our Projects</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From providing essential power for orphan care facilities to supporting life-changing
            cleft surgeries, here is a look at the impact our community has made.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  PAST PROJECTS (most recent first)                             */}
      {/* ═══════════════════════════════════════════════════════════════ */}

      {/* ── 1. Bangladesh / Rotaplast (most recent) ── */}
      {projects.map((project, idx) => (
        <section
          key={project.id}
          id={project.id}
          className={`py-10 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-6">
              <span className="inline-block bg-[#5d6396] text-white text-sm font-semibold px-4 py-1 rounded-full mb-2">
                {project.partner} &middot; {project.date}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f3257] mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </div>

            <div
              className={
                project.images.length === 1
                  ? "mx-auto grid max-w-2xl gap-3"
                  : project.images.length === 3
                    ? "grid gap-3 sm:grid-cols-3"
                    : "grid grid-cols-2 gap-3"
              }
            >
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-xl shadow-md ${
                    project.images.length === 1
                      ? "aspect-[3/4]"
                      : "layout" in img && img.layout === "wide"
                        ? "h-56 sm:col-span-3 sm:h-[34rem]"
                      : "h-56 sm:h-72 md:h-80"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={idx === 0 && i === 0}
                    sizes={
                      project.images.length === 1
                        ? "(max-width: 768px) 92vw, 672px"
                        : project.images.length === 3
                          ? "(max-width: 640px) 92vw, 33vw"
                          : "(max-width: 768px) 46vw, 560px"
                    }
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── 2. School Supplies Donation (older past event) ── */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-[#5d6396] text-white text-sm font-semibold px-4 py-1 rounded-full mb-2">
            Past Event
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3257] mb-3">
            Donating School Supplies
          </h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            School is one of the most important experiences a child goes through. Our next-generation
            children will be the world&apos;s future leaders, so it is our responsibility to offer proper education.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-left shadow-md">
              <h4 className="text-lg font-bold text-[#2f3257] mb-4">
                We fundraised to help underprivileged school kids.
              </h4>
              <ol className="space-y-3 text-gray-600 list-decimal list-inside text-sm">
                <li>The money went towards school supplies such as pencils, notebooks, erasers, scissors, glue, etc.</li>
                <li>These supplies enabled kids to participate in all school projects and homework without lacking basic materials.</li>
                <li>Donations allowed them to experience an entirely new educational experience.</li>
              </ol>
            </div>
            <div>
              <Image
                src="/images/9.jpeg"
                alt="School supplies collected for children in need"
                width={426}
                height={698}
                sizes="(max-width: 768px) 92vw, 448px"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2026 event */}

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-[#2f3257] text-white text-sm font-semibold px-4 py-1 rounded-full mb-2">
            Past Event · June 5, 2026
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3257] mb-3">
            Suture Collection Project for Cleft Surgeries
          </h2>
          <p className="text-gray-600 mb-6">Supporting safer cleft surgeries for children.</p>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="bg-[#2f3257] text-white p-8 rounded-lg text-left">
              <h4 className="text-xl font-bold mb-4">
                This event focused on support for essential surgical supplies.
              </h4>
              <ol className="space-y-4 list-decimal list-inside">
                <li>Funds go towards critical supplies such as sutures, surgical tools, and anesthesia materials.</li>
                <li>These supplies ensure surgeons can perform safe, effective cleft surgeries.</li>
                <li>Your donation directly impacts lives, giving children a future with more smiles.</li>
              </ol>
              <div className="mt-6 space-y-2">
                <p className="font-semibold">When</p>
                <p>Jun 05, 2026, 4:20 PM – 8:10 PM PDT</p>
                <p className="font-semibold mt-3">Where</p>
                <p>Fremont, CA, USA</p>
              </div>
            </div>
            <div>
              <Image
                src="/images/8.jpeg"
                alt="Save The Foster volunteers at a community event"
                width={1905}
                height={1100}
                sizes="(max-width: 768px) 92vw, 480px"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#5d6396]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Help Shape Our Next Project
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Volunteer, partner with us, or share a community need that Save The Foster can help address.
          </p>
          <Button asChild className="bg-white text-[#2f3257] hover:bg-gray-100 text-lg px-8 py-3">
            <Link href="/contact">Get Involved</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-0">
        <div className="grid md:grid-cols-3">
          <div
            className="relative h-80 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/10.jpeg")',
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Partner with Us</h3>
              <p className="text-lg font-semibold">Have an Impact</p>
            </div>
          </div>
          <div
            className="relative h-80 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/11.jpeg")',
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Volunteer Your Time</h3>
              <p className="text-lg font-semibold">Help Us Soar</p>
            </div>
          </div>
          <div
            className="relative h-80 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/12.jpeg")',
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Make a Donation</h3>
              <p className="text-lg font-semibold">Show Your Support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
