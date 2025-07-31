"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e2029] mb-6 leading-tight">
                Save The Foster
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                We are a local nonprofit committed towards Humanitarian efforts locally and globally.
              </p>
              <Button className="bg-[#1e2029] hover:bg-[#2a2d3a] text-white text-lg px-8 py-3 transition-colors">
                Get Involved
              </Button>
            </div>
            <div className="relative order-1 md:order-2">
              {/* Photo Collage */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://ext.same-assets.com/314997060/3628837202.jpeg"
                  alt="Children at play"
                  className="rounded-lg shadow-lg w-full h-40 md:h-48 object-cover"
                />
                <img
                  src="https://ext.same-assets.com/314997060/2173599510.webp"
                  alt="Child portrait"
                  className="rounded-lg shadow-lg w-full h-40 md:h-48 object-cover"
                />
                <img
                  src="https://ext.same-assets.com/314997060/3921842995.jpeg"
                  alt="Happy children"
                  className="rounded-lg shadow-lg w-full h-32 md:h-40 object-cover col-span-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Info Section */}
      <section className="bg-[#aeb2d9] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Save The Foster 501(c)(3) organization
          </h2>
          <div className="max-w-4xl mx-auto text-white text-lg leading-relaxed space-y-4">
            <p>
              By donating to our cause, you not only contribute to a noble humanitarian effort but also receive
              the benefit of a 100% tax deduction, making your contribution even more impactful.
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
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://ext.same-assets.com/314997060/35816260.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 md:p-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Local</h3>
              <p className="text-base md:text-lg leading-relaxed max-w-xs">
                Support your local charities! We directly help your community and the environment you live
                in. We live and breathe the Bay Area and know how to improve our surroundings by educating our youth.
              </p>
            </div>
          </div>

          {/* Visionary */}
          <div
            className="relative h-80 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://ext.same-assets.com/314997060/844139485.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 md:p-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Visionary</h3>
              <p className="text-base md:text-lg leading-relaxed max-w-xs">
                We are a local non-profit committed towards helping foster kids. We strive to cater
                towards the underprivileged. Helping Foster Kids are our #1 Priority.
              </p>
            </div>
          </div>

          {/* Charitable */}
          <div
            className="relative h-80 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://ext.same-assets.com/314997060/107937508.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 md:p-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Charitable</h3>
              <p className="text-base md:text-lg leading-relaxed max-w-xs">
                Every cent we raise goes back into the business and is reinvested towards providing an
                equal footing towards every Foster Kid in our community. We donate as much as we can and
                give back in magnitudes from our donations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4 text-center">
          <Button
            className="bg-[#1e2029] hover:bg-[#2a2d3a] text-white border border-white mb-8 text-lg px-8 py-3"
            onClick={() => window.open('http://paypal.me/SaveTheFoster', '_blank')}
          >
            Donate
          </Button>
          <h2 className="text-5xl font-bold text-white">
            Support their Future!
          </h2>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="py-24 bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://ext.same-assets.com/314997060/1990727535.jpeg")'
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
