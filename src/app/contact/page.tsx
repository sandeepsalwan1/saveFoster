import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { createPageMetadata, siteConfig } from "@/lib/site";
import ContactForm from "./ContactForm";

export const metadata = createPageMetadata({
  title: "Contact, Volunteer, or Partner With Us",
  description:
    "Contact Save The Foster to volunteer, partner, donate, or learn more about supporting foster youth and humanitarian projects in the Bay Area.",
  path: "/contact",
});

export default function Contact() {
  return (
    <main id="main-content" className="min-h-screen">
      <Header />

      <section className="relative isolate overflow-hidden py-24">
        <Image
          src="/images/24.jpeg"
          alt="Save The Foster volunteers working together"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/45" />
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-lg rounded-2xl bg-white/95 p-8 shadow-xl backdrop-blur-sm">
            <h1 className="mb-4 text-4xl font-bold text-[#2a316b]">
              Get Involved
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Join our community as a volunteer or donor and help us support
              children and families in need.
            </p>
            <Button
              asChild
              className="bg-[#2a316b] text-white hover:bg-[#1e2456]"
            >
              <a href="#contact-form">Join Save The Foster</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact-form" className="scroll-mt-6 bg-[#f9f3f0] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-3 text-center text-4xl font-bold text-[#2a316b]">
              Volunteer or Become a Donor
            </h2>
            <p className="mb-8 text-center leading-relaxed text-gray-600">
              Tell us how you would like to help. We will follow up using the
              contact information you provide.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section
        className="bg-white py-16"
        aria-labelledby="other-contact-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            id="other-contact-heading"
            className="mb-8 text-2xl font-bold text-[#2a316b]"
          >
            Other Ways to Reach Us
          </h2>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="p-6">
              <Mail
                aria-hidden="true"
                className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#2a316b] p-4 text-white"
              />
              <h3 className="mb-2 text-lg font-semibold text-[#2a316b]">
                Email
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#2a316b] hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="p-6">
              <MapPin
                aria-hidden="true"
                className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#2a316b] p-4 text-white"
              />
              <h3 className="mb-2 text-lg font-semibold text-[#2a316b]">
                Location
              </h3>
              <p className="text-gray-600">Bay Area, California</p>
            </div>

            <div className="p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2a316b] text-white">
                <Instagram aria-hidden="true" className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-[#2a316b]">
                Follow Our Work
              </h3>
              <div className="flex justify-center gap-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Save The Foster on Instagram"
                  className="rounded-md p-2 text-[#2a316b] hover:bg-[#f1f2fa]"
                >
                  <Instagram aria-hidden="true" className="h-6 w-6" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Save The Foster on Facebook"
                  className="rounded-md p-2 text-[#2a316b] hover:bg-[#f1f2fa]"
                >
                  <Facebook aria-hidden="true" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
