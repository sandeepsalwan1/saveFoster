"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with Split Images */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          {/* Support Our Youth */}
          <div
            className="relative h-80 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://ext.same-assets.com/314997060/2032188089.jpeg")'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Youth</h1>
            </div>
          </div>

          {/* Help Them Succeed */}
          <div
            className="relative h-80 md:h-96 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://ext.same-assets.com/314997060/2832025048.jpeg")'
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Them Succeed</h1>
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

            <Button
              className="bg-white text-[#293778] hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => window.location.href = '/upcoming-projects'}
            >
              Learn More
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
              <img
                src="https://ext.same-assets.com/314997060/287358955.jpeg"
                alt="Children playing in water"
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

      <Footer />
    </main>
  );
}
