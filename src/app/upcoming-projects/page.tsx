import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, HeartHandshake } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Past Projects & Humanitarian Impact",
  description:
    "Explore Save The Foster projects supporting foster youth, cleft surgery missions, humanitarian relief, and community partners, organized from newest to oldest.",
  path: "/projects",
});

type ProjectImage = {
  src: string;
  alt: string;
  wide?: boolean;
  position?: string;
};

type Project = {
  id: string;
  title: string;
  partner: string;
  date: string;
  sortLabel: string;
  description: string;
  images: ProjectImage[];
  highlights?: string[];
};

// One chronological source of truth. New and recent work stays at the top.
const projects: Project[] = [
  {
    id: "suture-collection-2026",
    title: "Suture Collection for Cleft Surgeries",
    partner: "Fremont, California",
    date: "June 5, 2026",
    sortLabel: "2026",
    description:
      "Save The Foster brought the community together to collect essential surgical supplies for safe, life-changing cleft lip and palate procedures.",
    highlights: [
      "Support for sutures, surgical tools, and anesthesia materials",
      "Direct help for medical teams serving children in need",
    ],
    images: [
      {
        src: "/images/8.jpeg",
        alt: "Save The Foster volunteers at the 2026 suture collection event in Fremont",
        wide: true,
      },
    ],
  },
  {
    id: "foster-family-support-town-hall",
    title: "Foster Family Support & Resource Outreach",
    partner: "CASA, Hively, and community partners",
    date: "Recent community outreach",
    sortLabel: "Recent",
    description:
      "Save The Foster joined a Foster Family Support Town Hall to connect caregivers, advocates, and families with practical resources for children in foster care.",
    images: [
      {
        src: "/images/projects/foster-family-support-town-hall/town-hall-speakers.webp",
        alt: "Save The Foster representative at a Foster Family Support Town Hall",
        position: "center 42%",
      },
      {
        src: "/images/projects/foster-family-support-town-hall/casa-community-partner.webp",
        alt: "CASA community resource table at the Foster Family Support Town Hall",
        position: "center 42%",
      },
      {
        src: "/images/projects/foster-family-support-town-hall/hively-community-partner.webp",
        alt: "Hively community resource table at the Foster Family Support Town Hall",
        position: "center 42%",
      },
    ],
  },
  {
    id: "faridabad-cleft-surgery-mission",
    title: "Cleft Lip and Palate Surgery Mission",
    partner: "Faridabad, India",
    date: "Recent humanitarian mission",
    sortLabel: "Recent",
    description:
      "Save The Foster supported families and medical teams working to provide cleft lip and palate surgeries for children in Faridabad.",
    images: [
      {
        src: "/images/projects/faridabad-cleft-surgery/mission-team.webp",
        alt: "Save The Foster with families and medical staff at the Faridabad cleft surgery mission",
        wide: true,
      },
      {
        src: "/images/projects/cleft-care/mother-and-child-hospital.webp",
        alt: "Mother holding her child during a cleft surgery mission in Faridabad, India",
        position: "center 38%",
      },
      {
        src: "/images/projects/cleft-care/mother-and-child-portrait.webp",
        alt: "Mother and child supported during the Faridabad cleft surgery mission",
        position: "center 38%",
      },
    ],
  },
  {
    id: "humanitarian-community-gala",
    title: "Humanitarian Partnership & Community Recognition",
    partner: "Community engagement",
    date: "Recent partnership gathering",
    sortLabel: "Recent",
    description:
      "Save The Foster joined humanitarian and community leaders to strengthen relationships that can expand support for children and families in need.",
    images: [
      {
        src: "/images/projects/community-gala/humanitarian-awards-gala.webp",
        alt: "Save The Foster with community and humanitarian leaders at a recognition gathering",
        position: "center 52%",
      },
    ],
  },
  {
    id: "bangladesh-2025",
    title: "Bangladesh Cleft Surgery Mission",
    partner: "Rotaplast International",
    date: "2025",
    sortLabel: "2025",
    description:
      "Save The Foster partnered with Rotaplast International to support free cleft lip and palate surgeries for children in Bangladesh.",
    images: [
      {
        src: "/images/bangladesh/mother-and-child.jpg",
        alt: "Mother holding her child before cleft surgery in Bangladesh",
        wide: true,
        position: "center 44%",
      },
      {
        src: "/images/bangladesh/child-after-surgery.jpg",
        alt: "Child smiling after successful cleft surgery",
        position: "center 42%",
      },
      {
        src: "/images/bangladesh/rotaplast-volunteer.jpg",
        alt: "Rotaplast volunteer embracing a mother and baby",
        position: "center 42%",
      },
    ],
  },
  {
    id: "rotaplast-suture-donation-2024",
    title: "Surgical Suture Donation",
    partner: "Rotaplast International",
    date: "September 2024",
    sortLabel: "2024",
    description:
      "Save The Foster donated surgical sutures to support medical teams providing cleft lip and palate surgeries for children in need.",
    images: [
      {
        src: "/images/projects/rotaplast-suture-donation/suture-donation-team.webp",
        alt: "Save The Foster volunteers presenting surgical sutures to Rotaplast International",
        position: "center 38%",
      },
    ],
  },
  {
    id: "ukraine-generators-2023",
    title: "Power for Orphan Care Facilities in Ukraine",
    partner: "Ukraine humanitarian relief",
    date: "January 2023",
    sortLabel: "2023",
    description:
      "Save The Foster helped raise funds to provide generators for facilities caring for orphaned children in Ukraine, helping ensure they had access to essential power during a time of crisis.",
    images: [
      {
        src: "/images/projects/ukraine-generators-2023.webp",
        alt: "Supporters at a fundraiser providing generators for orphan care facilities in Ukraine",
        position: "center 42%",
      },
    ],
  },
  {
    id: "school-supplies",
    title: "School Supplies for Children in Need",
    partner: "Education support",
    date: "Earlier project",
    sortLabel: "Earlier",
    description:
      "Save The Foster raised funds for notebooks, pencils, art materials, and other classroom essentials so children could participate fully in schoolwork and creative projects.",
    images: [
      {
        src: "/images/9.jpeg",
        alt: "School supplies collected for children in need",
        position: "center 46%",
      },
    ],
  },
];

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Save The Foster Past Projects",
  itemListOrder: "https://schema.org/ItemListOrderDescending",
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

function ProjectGallery({
  project,
  priority,
}: { project: Project; priority: boolean }) {
  const hasWideLead = project.images.length > 1 && project.images[0].wide;

  return (
    <div
      className={`grid gap-3 md:gap-4 ${
        project.images.length === 1
          ? "grid-cols-1"
          : hasWideLead
            ? "grid-cols-2"
            : "grid-cols-1 sm:grid-cols-3"
      }`}
    >
      {project.images.map((image, index) => {
        const isOnlyImage = project.images.length === 1;
        const isWide = image.wide && !isOnlyImage;

        return (
          <figure
            key={image.src}
            className={`group relative isolate overflow-hidden rounded-[1.35rem] bg-[#d9ddd9] ring-1 ring-black/10 ${
              isOnlyImage
                ? "mx-auto aspect-[16/10] w-full"
                : isWide
                  ? "col-span-2 aspect-[16/9]"
                  : "aspect-[4/5]"
            }`}
          >
            {isOnlyImage && !image.wide ? (
              <Image
                src={image.src}
                alt=""
                fill
                aria-hidden="true"
                sizes="(max-width: 768px) 92vw, 1100px"
                className="scale-110 object-cover opacity-20 blur-2xl"
              />
            ) : null}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={priority && index === 0}
              sizes={
                isOnlyImage || isWide
                  ? "(max-width: 768px) 92vw, 1100px"
                  : "(max-width: 640px) 92vw, 360px"
              }
              className={`transition-transform duration-700 ease-out group-hover:scale-[1.025] ${
                isOnlyImage && !image.wide
                  ? "object-contain p-3 md:p-5"
                  : "object-cover"
              }`}
              style={{ objectPosition: image.position ?? "center" }}
            />
          </figure>
        );
      })}
    </div>
  );
}

export default function Projects() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#f4f2ec] text-[#191f29]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <section className="relative overflow-hidden bg-[#171d2d] text-white">
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -right-28 -top-36 h-[28rem] w-[28rem] rounded-full bg-[#efc879]/20 blur-3xl" />
        <div className="container relative mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#efc879]">
            Impact archive
          </p>
          <h1 className="font-display mx-auto max-w-4xl text-5xl font-semibold tracking-[-0.035em] sm:text-6xl md:text-7xl">
            Care made visible.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Past projects, organized from newest to oldest. Each one reflects
            the generosity of volunteers, partners, and donors who chose to show
            up for children and families.
          </p>
          <div
            className="mt-10 flex flex-wrap justify-center gap-2"
            aria-label="Project timeline"
          >
            {["2026", "Recent", "2025", "2024", "2023", "Earlier"].map(
              (label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-white/80"
                >
                  {label}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#efc879] py-4">
        <div className="container mx-auto flex max-w-6xl items-center justify-center gap-3 px-5 text-center text-sm font-semibold text-[#171d2d]">
          <HeartHandshake className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{projects.length} projects, newest first</span>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-5 py-12 md:py-20">
        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              id={project.id}
              className="scroll-mt-8 overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#fffdf8] shadow-[0_18px_55px_rgba(30,35,45,0.08)]"
            >
              <div className="grid gap-8 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_18rem] md:items-end md:p-10">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#171d2d] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                      {project.sortLabel}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#69716f]">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="font-display max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#1c2740] sm:text-4xl md:text-5xl">
                    {project.title}
                  </h2>
                </div>

                <dl className="grid gap-3 border-t border-black/10 pt-5 text-sm md:border-l md:border-t-0 md:pl-7 md:pt-0">
                  <div>
                    <dt className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8a6b30]">
                      <CalendarDays
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                      When
                    </dt>
                    <dd className="font-semibold text-[#253046]">
                      {project.date}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[#8a6b30]">
                      With
                    </dt>
                    <dd className="font-semibold text-[#253046]">
                      {project.partner}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="px-5 sm:px-7 md:px-10">
                <ProjectGallery project={project} priority={index === 0} />
              </div>

              <div className="grid gap-5 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:p-10">
                <p className="max-w-3xl text-base leading-7 text-[#59615f] md:text-lg md:leading-8">
                  {project.description}
                </p>
                {project.highlights ? (
                  <ul className="max-w-sm space-y-2 border-l-2 border-[#efc879] pl-4 text-sm leading-6 text-[#4c5654]">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="bg-[#171d2d] px-5 py-20 text-center text-white md:py-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#efc879]">
          The next chapter
        </p>
        <h2 className="font-display mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
          Help shape what comes next.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/65">
          Volunteer, partner with us, or share a community need that Save The
          Foster can help address.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#efc879] px-6 py-3.5 text-sm font-bold text-[#171d2d] transition hover:bg-[#f5d99f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Get involved
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
