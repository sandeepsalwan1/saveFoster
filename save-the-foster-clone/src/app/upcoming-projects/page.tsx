"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

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
      "Save The Foster partnered with Rotaplast International to provide free cleft lip and palate surgeries to children in Bangladesh. Our volunteers also collected and donated suture materials to support the surgical team.",
    images: [
      { src: "/images/bangladesh/mother-and-child.jpg", alt: "Mother holding her child before cleft surgery in Bangladesh" },
      { src: "/images/bangladesh/child-after-surgery.jpg", alt: "Child smiling after successful cleft surgery" },
      { src: "/images/bangladesh/rotaplast-volunteer.jpg", alt: "Rotaplast volunteer embracing a mother and baby" },
      { src: "/images/bangladesh/suture-donation-team.jpg", alt: "Save The Foster volunteers with donated suture materials" },
    ],
  },
  // ── Add future projects below this line ──
  // {
  //   id: "project-id",
  //   title: "Project Title",
  //   partner: "Partner Org",
  //   date: "Year",
  //   description: "Short description of the project.",
  //   images: [
  //     { src: "/images/folder/photo.jpg", alt: "Description" },
  //   ],
  // },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Projects() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 mb-4">Working Towards a Better Tomorrow</p>
          <h1 className="text-5xl font-bold text-[#2f3257] mb-4">Our Projects</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From collecting surgical supplies to performing life-changing cleft surgeries abroad,
            here is a look at the impact our community has made.
          </p>
        </div>
      </section>

      {/* ── Project Galleries ── */}
      {projects.map((project, idx) => (
        <section
          key={project.id}
          className={`py-16 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Project header */}
            <div className="text-center mb-10">
              <span className="inline-block bg-[#aeb2d9] text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
                {project.partner} &middot; {project.date}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2f3257] mb-4">
                {project.title}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Photo grid – responsive masonry-style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl shadow-md ${
                    i === 0 ? "sm:row-span-2" : ""
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${
                      i === 0 ? "h-64 sm:h-full" : "h-64"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── More Projects Coming Soon placeholder ── */}
      <section className="py-20 bg-[#aeb2d9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More Projects Coming Soon
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            We have photos and stories from many past missions. Stay tuned as we add galleries
            from our earlier projects in other regions.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#2f3257] hover:bg-gray-100 text-lg px-8 py-3">
              Get Involved
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Suture Collection Project (existing upcoming event) ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#2f3257] mb-8">Upcoming Event</h2>
          <h3 className="text-2xl font-bold text-[#2f3257] mb-6 underline">
            Suture Collection Project for Cleft Surgeries
          </h3>
          <p className="text-lg text-gray-600 mb-4">You are donating for their smiles.</p>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-8">
            <div className="bg-[#2f3257] text-white p-8 rounded-lg text-left">
              <h4 className="text-xl font-bold mb-4">
                We are fundraising to support essential surgical supplies.
              </h4>
              <ol className="space-y-4 list-decimal list-inside">
                <li>Funds go towards critical supplies such as sutures, surgical tools, and anesthesia materials.</li>
                <li>These supplies ensure surgeons can perform safe, effective cleft surgeries.</li>
                <li>Your donation directly impacts lives, giving children a future with more smiles.</li>
              </ol>
              <div className="mt-6 space-y-2">
                <p className="font-semibold">When</p>
                <p>Jun 05, 2023, 4:20 PM – 8:10 PM PDT</p>
                <p className="font-semibold mt-3">Where</p>
                <p>Fremont, CA, USA</p>
              </div>
            </div>
            <div>
              <img
                src="/images/8.jpeg"
                alt="Event volunteers"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Past Event: School Supplies ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#2f3257] mb-8">Past Event</h2>
          <h3 className="text-2xl font-bold text-[#2f3257] mb-6 underline">
            Donating School Supplies
          </h3>
          <p className="text-lg text-gray-600 mb-4">You are donating for your future.</p>
          <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            School is one of the most important experiences a child goes through. Our next-generation
            children will be the world&apos;s future leaders, so it is our responsibility to offer proper education.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-left shadow-md">
              <h4 className="text-lg font-bold text-[#2f3257] mb-4">
                We are fundraising to help underprivileged school kids.
              </h4>
              <ol className="space-y-3 text-gray-600 list-decimal list-inside text-sm">
                <li>The money goes towards school supplies such as pencils, notebooks, erasers, scissors, glue, etc.</li>
                <li>These supplies enable kids to participate in all school projects and homework without lacking basic materials.</li>
                <li>Your donation allows them to experience an entirely new educational experience.</li>
              </ol>
            </div>
            <div>
              <img
                src="/images/9.jpeg"
                alt="School supplies donation"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
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
