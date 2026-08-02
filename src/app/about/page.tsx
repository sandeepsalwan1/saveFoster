import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createPageMetadata, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Us & Founder Sonia Salwan",
  description:
    "Meet Save The Foster founder and veterinarian Sonia Salwan, and learn about our mission to support foster children and humanitarian causes.",
  path: "/about",
});

export default function About() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />

      {/* Founder */}
      <section className="relative overflow-hidden bg-[#171a2a] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#aeb2d9]/20 blur-3xl" />
        <div className="container relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div className="order-2 md:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#c9ccef]">
              Meet Our Founder
            </p>
            <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
              Sonia Salwan
            </h1>
            <div className="mb-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">
                Founder
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">
                Veterinarian
              </span>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-white/80">
              Sonia founded Save The Foster to bring compassionate, practical support to children
              and communities in need. As a veterinarian, she brings a care-centered perspective
              to the organization&apos;s humanitarian work locally and globally.
            </p>
          </div>

          <div className="order-1 mx-auto w-full max-w-md md:order-2">
            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30">
              <Image
                src="/images/founder/sonia-salwan.webp"
                alt="Sonia Salwan, founder of Save The Foster and veterinarian"
                width={1290}
                height={1186}
                priority
                sizes="(max-width: 768px) 90vw, 420px"
                className="aspect-square w-full rounded-[1.4rem] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Split Images */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          {/* Support Our Youth */}
          <div
            className="relative h-80 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/13.jpeg")'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Support Our Youth</h2>
            </div>
          </div>

          {/* Help Them Succeed */}
          <div
            className="relative h-80 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/14.jpeg")'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Help Them Succeed</h2>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-[#293778] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            A Bit About Us
          </h2>
          <p className="text-lg text-white mb-8 underline">
            Working Towards a Better Tomorrow
          </p>

          <div className="max-w-4xl mx-auto text-white text-lg leading-relaxed">
            <p className="mb-6">
              At Save the Foster, we are a group of diverse volunteers who seek to help foster
              kids. We want to be a catalyst for positive change, and since our beginnings in
              Early 2022, we've been driven by the same ideas we initially founded our Non-Profit
              Organization upon: support, empowerment, and progress.
            </p>
            <p className="mb-8">
              Learn more about our mission, our vision, and how we go about making the changes we want to see.
            </p>

            <Button asChild className="bg-white text-[#293778] hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="/projects">Explore Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#293778] mb-6">Mission</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We believe in Humanitarian help. Our efforts are to help Humanitarian causes
                  locally and globally. We give financial assistance and voluntary efforts to
                  uplift humanity.
                </p>
                <p>
                  Passionate about helping children, foster kids, and children rescued from sex
                  trafficking. Provides efforts to help improve mental and physical health and
                  well-being of children.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/15.jpeg"
                alt="Children playing in water"
                width={3811}
                height={1936}
                sizes="(max-width: 768px) 92vw, 576px"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#293778] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#293778] mb-2">Support</h4>
              <p className="text-gray-600">
                Providing comprehensive support to foster children and families in need.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#293778] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#293778] mb-2">Empowerment</h4>
              <p className="text-gray-600">
                Empowering youth through education, resources, and opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#293778] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#293778] mb-2">Progress</h4>
              <p className="text-gray-600">
                Creating lasting change and progress in the lives we touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16">
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
