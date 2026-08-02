import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Past Projects & Humanitarian Impact",
  description:
    "Explore Save The Foster projects supporting foster youth, MARICI education and child protection, cleft surgery missions, humanitarian relief, and community partners.",
  path: "/projects",
});

type ProjectImage = {
  src: string;
  alt: string;
  wide?: boolean;
  tall?: boolean;
  position?: string;
};

type Project = {
  id: string;
  title: string;
  partner: string;
  date: string;
  description: string;
  images: ProjectImage[];
};

// One chronological source of truth. New and recent work stays at the top.
const projects: Project[] = [
  {
    id: "marici-education-2026",
    title: "Education & Child Protection Support",
    partner: "MARICI",
    date: "July 2026",
    description:
      "Save The Foster supported MARICI's child-protection and education work, helping children move toward safer futures and greater access to learning. Supporters gathered at a Bay Area community event around the belief that education creates freedom.",
    images: [
      {
        src: "/images/projects/marici-education/community-event.webp",
        alt: "Save The Foster supporters at a Bay Area event supporting MARICI's education and child-protection work",
        wide: true,
      },
    ],
  },
  {
    id: "foster-family-support-town-hall",
    title: "Foster Family Support & Resource Outreach",
    partner: "CASA, Hively, and community partners",
    date: "Recent community outreach",
    description:
      "Save The Foster sponsored a Town Hall for foster children and families, bringing together CASA, Hively, caregivers, and community advocates to share practical resources and support.",
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
    description:
      "Save The Foster donated surgical sutures to support medical teams providing cleft lip and palate surgeries for children in need.",
    images: [
      {
        src: "/images/projects/rotaplast-suture-donation/suture-donation-team.webp",
        alt: "Save The Foster volunteers presenting surgical sutures to Rotaplast International",
        position: "center 38%",
      },
      {
        src: "/images/projects/rotaplast-suture-donation/medical-team.webp",
        alt: "Medical team members with surgical sutures donated by Save The Foster in September 2024",
        position: "center 36%",
      },
    ],
  },
  {
    id: "rotaplast-first-donation-2023",
    title: "First Rotaplast Suture Donation",
    partner: "Rotaplast International",
    date: "2023",
    description:
      "Save The Foster made its first donation supporting cleft lip and palate surgery through Rotaplast International in 2023. The surgical sutures were presented in honor of Dr. Angelo's 92nd birthday.",
    images: [
      {
        src: "/images/projects/rotaplast-first-donation/presentation.webp",
        alt: "Save The Foster presenting its first surgical suture donation to Rotaplast International in 2023",
        wide: true,
      },
      {
        src: "/images/projects/rotaplast-first-donation/dr-angelo.webp",
        alt: "Dr. Angelo with donated surgical sutures on his 92nd birthday",
        position: "center 42%",
      },
    ],
  },
  {
    id: "ukraine-generators-2023",
    title: "Power for Orphan Care Facilities in Ukraine",
    partner: "Ukraine humanitarian relief",
    date: "January 2023",
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
    description:
      "Save The Foster raised funds for notebooks, pencils, art materials, and other classroom essentials so children could participate fully in schoolwork and creative projects.",
    images: [
      {
        src: "/images/9.jpeg",
        alt: "Save The Foster supporters after providing supplies to foster children in San Leandro schools",
        tall: true,
        position: "center top",
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
  const isPair = project.images.length === 2;
  const hasWideLead = project.images.length > 2 && project.images[0].wide;

  return (
    <div
      className={`grid gap-3 md:gap-4 ${
        project.images.length === 1
          ? "grid-cols-1"
          : project.images.length === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : hasWideLead
              ? "grid-cols-2"
              : "grid-cols-1 sm:grid-cols-3"
      }`}
    >
      {project.images.map((image, index) => {
        const isOnlyImage = project.images.length === 1;
        const isWide = image.wide && hasWideLead;

        return (
          <figure
            key={image.src}
            className={`group relative isolate overflow-hidden rounded-xl bg-[#d9ddd9] ring-1 ring-black/10 md:rounded-[1.35rem] ${
              isOnlyImage
                ? image.tall
                  ? "mx-auto aspect-[435/426] w-full max-w-2xl"
                  : "aspect-[16/9] w-full"
                : isPair
                  ? "aspect-[4/3]"
                  : isWide
                    ? "col-span-2 aspect-[16/9]"
                    : "aspect-[4/5]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={priority && index === 0}
              sizes={
                isOnlyImage || isWide
                  ? "(max-width: 768px) 92vw, 1100px"
                  : isPair
                    ? "(max-width: 640px) 92vw, 540px"
                    : "(max-width: 640px) 92vw, 360px"
              }
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
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
    <main id="main-content" className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <section className="border-b border-gray-200 bg-gray-50 py-7 md:py-10">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <h1 className="text-3xl font-bold text-[#2f3257] md:text-5xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
            Community partnerships and humanitarian projects supporting children
            and families locally and around the world.
          </p>
        </div>
      </section>

      <div>
        {projects.map((project, index) => (
          <article
            key={project.id}
            id={project.id}
            className={`scroll-mt-8 border-b border-gray-200 py-8 md:py-12 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div className="container mx-auto max-w-6xl px-5">
              <header className="mb-5 text-center md:mb-6">
                <p className="mb-2 text-xs font-semibold text-[#5d6396] md:text-sm">
                  {project.date}
                  <span className="mx-2" aria-hidden="true">
                    ·
                  </span>
                  {project.partner}
                </p>
                <h2 className="text-2xl font-bold leading-tight text-[#2f3257] md:text-4xl">
                  {project.title}
                </h2>
                <p className="mx-auto mt-3 max-w-3xl text-[15px] leading-6 text-gray-600 md:text-base md:leading-7">
                  {project.description}
                </p>
              </header>
              <ProjectGallery project={project} priority={index === 0} />
            </div>
          </article>
        ))}
      </div>

      <section className="bg-[#5d6396] px-5 py-12 text-center text-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Help Shape Our Next Project
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-white/85">
            Volunteer, partner with us, or share a community need we can help
            address.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-md bg-white px-6 py-3 font-semibold text-[#2f3257] transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Get involved
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
