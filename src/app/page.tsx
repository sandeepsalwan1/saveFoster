import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Save The Foster | Bay Area Foster Youth Nonprofit",
  description:
    "Save The Foster supports foster youth, vulnerable children, and humanitarian projects through community programs, donations, and volunteer action.",
  path: "/",
});

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e2029] mb-6 leading-tight">
                Save The Foster
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                We are a Bay Area nonprofit supporting foster youth, vulnerable children, and humanitarian efforts locally and globally.
              </p>
              <Button asChild className="bg-[#1e2029] hover:bg-[#2a2d3a] text-white text-lg px-8 py-3 transition-colors">
                <Link href="/contact">Get Involved</Link>
              </Button>
            </div>
            <div className="relative order-1 md:order-2">
              {/* Photo Collage */}
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/1.jpeg"
                  alt="Children supported by Save The Foster playing together"
                  width={718}
                  height={718}
                  loading="eager"
                  sizes="(max-width: 768px) 46vw, 280px"
                  className="rounded-lg shadow-lg w-full h-40 md:h-48 object-cover"
                />
                <Image
                  src="/images/2.jpeg"
                  alt="A child supported through community humanitarian work"
                  width={568}
                  height={568}
                  loading="eager"
                  sizes="(max-width: 768px) 46vw, 280px"
                  className="rounded-lg shadow-lg w-full h-40 md:h-48 object-cover"
                />
                <Image
                  src="/images/3.jpeg"
                  alt="Children smiling together at a community program"
                  width={790}
                  height={530}
                  priority
                  sizes="(max-width: 768px) 92vw, 576px"
                  className="rounded-lg shadow-lg w-full h-32 md:h-40 object-cover col-span-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Info Section */}
      <section className="bg-[#5d6396] py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Save The Foster 501(c)(3) organization
          </h2>
          <div className="max-w-4xl mx-auto text-white text-lg leading-relaxed space-y-4">
            <p>
              Your donation supports our humanitarian work and may be tax deductible to the extent allowed by law.
            </p>
            <p>
              Please email us at <a href="mailto:savethefoster@gmail.com" className="underline hover:no-underline">
                savethefoster@gmail.com
              </a> after contributing so we can send you an acknowledgment letter for your tax purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Local */}
          <div
            className="relative h-80 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/4.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 md:p-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Local</h3>
              <p className="text-base md:text-lg leading-relaxed max-w-xs">
                Strong communities start with local action. We support Bay Area youth through
                education, practical resources, and volunteer-led programs.
              </p>
            </div>
          </div>

          {/* Visionary */}
          <div
            className="relative h-80 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/5.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 md:p-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Visionary</h3>
              <p className="text-base md:text-lg leading-relaxed max-w-xs">
                We are a local nonprofit committed to helping foster youth and vulnerable children.
                Giving young people practical support and opportunity is our highest priority.
              </p>
            </div>
          </div>

          {/* Charitable */}
          <div
            className="relative h-80 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/6.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 md:p-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Charitable</h3>
              <p className="text-base md:text-lg leading-relaxed max-w-xs">
                Contributions support programs and humanitarian projects that help foster youth and
                vulnerable children build healthier, more secure futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Project Teaser */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f3257] mb-2">
            Recent Humanitarian Work
          </h2>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">
            Cleft surgery missions and surgical supply support with Rotaplast International
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Image src="/images/bangladesh/mother-and-child.jpg" alt="Mother holding her child before cleft surgery in Bangladesh" width={6240} height={4160} sizes="(max-width: 768px) 46vw, 280px" className="rounded-xl shadow-md w-full h-48 md:h-56 object-cover" />
            <Image src="/images/bangladesh/child-after-surgery.jpg" alt="Child smiling after successful cleft surgery" width={1200} height={1600} sizes="(max-width: 768px) 46vw, 280px" className="rounded-xl shadow-md w-full h-48 md:h-56 object-cover" />
            <Image src="/images/bangladesh/rotaplast-volunteer.jpg" alt="Rotaplast volunteer with a mother and child" width={3896} height={4653} sizes="(max-width: 768px) 46vw, 280px" className="rounded-xl shadow-md w-full h-48 md:h-56 object-cover" />
            <Image src="/images/bangladesh/suture-donation-team.jpg" alt="Save The Foster volunteers with donated suture materials" width={4032} height={3024} sizes="(max-width: 768px) 46vw, 280px" className="rounded-xl shadow-md w-full h-48 md:h-56 object-cover" />
          </div>
          <Button asChild className="mt-8 bg-[#2f3257] hover:bg-[#3d4170] text-white text-lg px-8 py-3">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="bg-black py-10">
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

      {/* Quote Section */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/7.jpeg")'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <blockquote className="text-3xl font-light mb-4 max-w-4xl mx-auto">
            "Great things are done by a series of small things brought together"
          </blockquote>
          <cite className="text-xl font-semibold">Vincent van Gogh</cite>
        </div>
      </section>

      <Footer />
    </main>
  );
}
