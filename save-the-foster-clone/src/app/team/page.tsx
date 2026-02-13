"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Team() {
  const teamMembers = [
    {
      name: "Dr Harpreet Chachal",
      title: "Project Manager",
      image: "/images/16.jpeg",
      description: "She is very passionate about helping foster youth. During her time served as a practical doctor, she has picked up many practical skills and knowledge."
    },
    {
      name: "Bobbi Ausubel",
      title: "Content Strategist",
      image: "/images/17.jpeg",
      description: "Bobby has worked internationally with kids and has helped restore emotional and mental health of many exploited youth."
    },
    {
      name: "Ranjana Saxena",
      title: "Coordinator",
      image: "/images/18.jpeg",
      description: "Dr. Saxena is a well accomplished physician, and in her free time she serves foster kids."
    },
    {
      name: "Sandeep Salwan",
      title: "Tech Lead",
      image: "/images/19.jpeg",
      description: "Sandeep is a University student studying Computer Science and wants to use his knowledge for the betterment of society."
    },
    {
      name: "Aryan Mohindra",
      title: "Public Image And Marketing Management",
      image: "/images/20.jpeg",
      description: "Aryan is a Highschool senior who is apart of the California Scholarship Federation, Social Justice Leadership, and National Honors Society."
    },
    {
      name: "Dr Chau Phan",
      title: "Product Manager",
      image: "/images/21.jpeg",
      description: "Dr Phan is a multitalented individual who runs many businesses, but she finds time to serve her community."
    },
    {
      name: "Janice Lacsina",
      title: "Volunteer",
      image: "/images/22.jpeg",
      description: "Janice has great experience in contributing to organizations and is a great help towards her local neighborhoods."
    }
  ];

  return (
    <main className="min-h-screen">
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
      <section className="bg-[#3c9be4] py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-3xl md:text-4xl font-light text-white max-w-4xl mx-auto">
            "Alone we can do so little<br />
            together we can do so much."
          </blockquote>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-[#3c9be4] pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover"
                />
                <div className="p-6 flex-1 bg-[#8fa8db]">
                  <p className="text-sm text-[#2f3257] font-medium mb-1">{member.title}</p>
                  <h3 className="text-xl font-bold text-[#2f3257] mb-3">{member.name}</h3>
                  <p className="text-sm text-white leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="hover:opacity-75">
                      <svg className="w-5 h-5 text-[#2f3257]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" className="hover:opacity-75">
                      <svg className="w-5 h-5 text-[#2f3257]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="#" className="hover:opacity-75">
                      <svg className="w-5 h-5 text-[#2f3257]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="bg-[#3c9be4] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2f3257] mb-8">
            Want to join the team?
          </h2>
          <Button
            className="bg-white text-[#3c9be4] hover:bg-gray-100 text-lg px-8 py-3"
            onClick={() => window.location.href = '/contact'}
          >
            APPLY HERE
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
