"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Team() {
  const teamMembers = [
    {
      name: "Dr Harpreet Chachal",
      title: "Project Manager",
      image: "https://ext.same-assets.com/314997060/1285485762.png",
      description: "She is very passionate about helping foster youth. During her time served as a practical doctor, she has picked up many practical skills and knowledge."
    },
    {
      name: "Bobbi Ausubel",
      title: "Content Strategist",
      image: "https://ext.same-assets.com/314997060/130281676.jpeg",
      description: "Bobby has worked internationally with kids and has helped restore emotional and mental health of many exploited youth."
    },
    {
      name: "Ranjana Saxena",
      title: "Coordinator",
      image: "https://ext.same-assets.com/314997060/1533384369.png",
      description: "Dr. Saxena is a well accomplished physician, and in her free time she serves foster kids."
    },
    {
      name: "Sandeep Salwan",
      title: "Tech Lead",
      image: "https://ext.same-assets.com/314997060/529382035.png",
      description: "Sandeep is a University student studying Computer Science and wants to use his knowledge for the betterment of society."
    },
    {
      name: "Aryan Mohindra",
      title: "Public Image And Marketing Management",
      image: "https://ext.same-assets.com/314997060/1958279240.png",
      description: "Aryan is a Highschool senior who is apart of the California Scholarship Federation, Social Justice Leadership, and National Honors Society."
    },
    {
      name: "Dr Chau Phan",
      title: "Product Manager",
      image: "https://ext.same-assets.com/314997060/1379906825.png",
      description: "Dr Phan is a multitalented individual who runs many businesses, but she finds time to serve her community."
    },
    {
      name: "Janice Lacsina",
      title: "Volunteer",
      image: "https://ext.same-assets.com/314997060/295502431.png",
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
                      <img src="https://ext.same-assets.com/314997060/1331218441.png" alt="Facebook" className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:opacity-75">
                      <img src="https://ext.same-assets.com/314997060/2593578048.png" alt="Twitter" className="w-5 h-5" />
                    </a>
                    <a href="#" className="hover:opacity-75">
                      <img src="https://ext.same-assets.com/314997060/135932356.png" alt="LinkedIn" className="w-5 h-5" />
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
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://ext.same-assets.com/314997060/475665609.jpeg")'
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
