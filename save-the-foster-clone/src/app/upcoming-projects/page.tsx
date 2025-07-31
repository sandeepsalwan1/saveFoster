"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UpcomingProjects() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 mb-4">Working Towards a Better Tomorrow</p>
          <h1 className="text-5xl font-bold text-[#2f3257] mb-8">
            Upcoming Events
          </h1>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2f3257] mb-6 underline">
              Suture Collection Project for Cleft Surgeries
            </h2>
            <p className="text-lg text-gray-600 mb-4">You are donating for their smiles.</p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              School is one of the most important experiences a child goes through. Our next-generation
              children will be the world's future leaders, so it is our responsibility to offer proper education.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-12 text-left">
              <h3 className="text-xl font-bold text-[#2f3257] mb-4">
                We are fundraising to support essential surgical supplies.
              </h3>
              <ol className="space-y-4 text-gray-600 list-decimal list-inside">
                <li>The funds go towards critical surgical supplies such as sutures, surgical tools, and anesthesia materials.</li>
                <li>These supplies ensure that surgeons can perform safe, effective cleft surgeries without the constraint of inadequate resources.</li>
                <li>Your generous donation supports the operational success of surgeries and impacts lives directly, allowing children to enjoy a future with more smiles and opportunities.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="bg-[#2f3257] text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Volunteering for Suture Collection Project</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">When</p>
                  <p>Jun 05, 2023, 4:20 PM – 8:10 PM PDT</p>
                </div>
                <div>
                  <p className="font-semibold">Where</p>
                  <p>Fremont, CA, USA</p>
                </div>
                <Button className="bg-white text-[#2f3257] hover:bg-gray-100 mt-4">
                  Details
                </Button>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/314997060/274617797.png"
                alt="Event volunteers"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Past Event Section */}
      <section className="py-16 bg-[#aeb2d9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#2f3257] mb-8">
            Successful Past Event
          </h2>
          <h3 className="text-2xl font-bold text-[#2f3257] mb-6 underline">
            Donating School Supplies
          </h3>
          <p className="text-lg text-white mb-4">You are donating for your future.</p>
          <p className="text-base text-white mb-8 leading-relaxed max-w-4xl mx-auto">
            School is one of the most important experiences a child goes through. Our next-generation
            children will be the world's future leaders, so it is our responsibility to offer proper education.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-left">
              <h4 className="text-lg font-bold text-[#2f3257] mb-4">
                We are fundraising to help underprivileged school kids.
              </h4>
              <ol className="space-y-3 text-gray-600 list-decimal list-inside text-sm">
                <li>The money goes towards school supplies such as pencils, notebooks, erasers, scissors, glue, etc.</li>
                <li>These supplies enable kids to participate in all school projects, assignments, and homework without the burden of lacking basic materials.</li>
                <li>Your generous donation allows them to experience an entirely new educational experience that they deserve.</li>
              </ol>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/314997060/516812017.png"
                alt="School supplies donation"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="grid md:grid-cols-3">
          {/* Partner with Us */}
          <div
            className="relative h-80 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://ext.same-assets.com/314997060/2126162314.jpeg")'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Partner with Us</h3>
              <p className="text-lg font-semibold">Have an Impact</p>
            </div>
          </div>

          {/* Volunteer Your Time */}
          <div
            className="relative h-80 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://ext.same-assets.com/314997060/1462161279.jpeg")'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Volunteer Your Time</h3>
              <p className="text-lg font-semibold">Help Us Soar</p>
            </div>
          </div>

          {/* Make a Donation */}
          <div
            className="relative h-80 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://ext.same-assets.com/314997060/3671535416.jpeg")'
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
