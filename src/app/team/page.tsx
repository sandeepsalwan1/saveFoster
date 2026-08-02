import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Our Volunteer Team",
  description:
    "Meet the Save The Foster volunteers supporting foster youth, community programs, and humanitarian projects in the Bay Area and beyond.",
  path: "/team",
});

export default function Team() {
  const teamMembers = [
    {
      name: "Dr Harpreet Chachal",
      title: "Project Manager",
      image: "/images/16.jpeg",
      description: "She is passionate about helping foster youth and brings practical medical knowledge and community-service experience to our projects."
    },
    {
      name: "Bobbi Ausubel",
      title: "Content Strategist",
      image: "/images/17.jpeg",
      description: "Bobbi has worked internationally with children and has supported the emotional and mental health of exploited youth."
    },
    {
      name: "Ranjana Saxena",
      title: "Coordinator",
      image: "/images/18.jpeg",
      description: "Dr. Saxena is an accomplished physician who volunteers her time to serve foster youth."
    },
    {
      name: "Sandeep Salwan",
      title: "Tech Lead",
      image: "/images/19.jpeg",
      description: "Sandeep studies computer science and applies his technical knowledge to support the organization and its community work."
    },
    {
      name: "Aryan Mohindra",
      title: "Public Image and Marketing",
      image: "/images/20.jpeg",
      description: "Aryan supports public outreach and marketing while participating in academic and social justice leadership programs."
    },
    {
      name: "Dr Chau Phan",
      title: "Product Manager",
      image: "/images/21.jpeg",
      description: "Dr. Phan brings broad business experience and dedicates time to serving her community."
    },
    {
      name: "Janice Lacsina",
      title: "Volunteer",
      image: "/images/22.jpeg",
      description: "Janice brings nonprofit volunteer experience and a strong commitment to helping local communities."
    }
  ];

  return (
    <main id="main-content" className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-[#2f3257] mb-4">
            Meet The Team
          </h1>
          <p className="text-xl text-gray-600">
            Dedication. Expertise. Passion.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#245f8e] py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-3xl md:text-4xl font-light text-white max-w-4xl mx-auto">
            "Alone we can do so little<br />
            together we can do so much."
          </blockquote>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-[#245f8e] pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <article key={member.name} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden sm:flex-row">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.title} at Save The Foster`}
                  width={620}
                  height={684}
                  sizes="(max-width: 640px) 92vw, 128px"
                  className="h-64 w-full object-cover sm:h-32 sm:w-32"
                />
                <div className="p-6 flex-1 bg-white">
                  <p className="text-sm text-[#2f3257] font-medium mb-1">{member.title}</p>
                  <h3 className="text-xl font-bold text-[#2f3257] mb-3">{member.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="bg-[#245f8e] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Want to join the team?
          </h2>
          <Button asChild className="bg-white text-[#245f8e] hover:bg-gray-100 text-lg px-8 py-3">
            <Link href="/contact">Join the Team</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/23.jpeg")'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <Button asChild className="bg-[#1e2029] hover:bg-[#2a2d3a] text-white border border-white mb-8 text-lg px-8 py-3">
            <a href={siteConfig.donationUrl} target="_blank" rel="noopener noreferrer">
              Donate
            </a>
          </Button>
          <h2 className="text-5xl font-bold text-white">
            Support their Future!
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
