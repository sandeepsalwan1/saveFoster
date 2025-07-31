"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="py-24 bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://ext.same-assets.com/314997060/803898836.jpeg")'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-[#2a316b] mb-4">
              Get Involved
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Come apply to ask us questions<br />
              or even visit us in-person!
            </p>
            <Button
              className="bg-[#2a316b] hover:bg-[#1e2456] text-white"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Now
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-[#f9f3f0]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-[#2a316b] text-center mb-8">
              Contact Save The Foster
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Thanks for submitting!
                </div>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 border-gray-300 focus:border-[#2a316b] focus:ring-[#2a316b]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 border-gray-300 focus:border-[#2a316b] focus:ring-[#2a316b]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 border-gray-300 focus:border-[#2a316b] focus:ring-[#2a316b]"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-1 border-gray-300 focus:border-[#2a316b] focus:ring-[#2a316b]"
                    placeholder="Type your message here..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-[#2a316b] hover:bg-[#1e2456] text-white px-8 py-3"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-[#2a316b] mb-8">Other Ways to Reach Us</h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="w-16 h-16 bg-[#2a316b] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#2a316b] mb-2">Email</h4>
              <p className="text-gray-600">
                <a href="mailto:savethefoster@gmail.com" className="text-[#2a316b] hover:underline">
                  savethefoster@gmail.com
                </a>
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-[#2a316b] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#2a316b] mb-2">Location</h4>
              <p className="text-gray-600">Bay Area, California</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-[#2a316b] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.999 2.999 0 0 0 17.06 7c-.8 0-1.54.35-2.06.94L12 10.5 9 7.94A2.999 2.999 0 0 0 6.06 7c-.8 0-1.54.35-2.06.94L1.5 16H4v6h2v-6h2l2-2.5L12 16l2-2.5L16 16h2v6h2z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-[#2a316b] mb-2">Social Media</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.instagram.com/savethefoster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <img src="https://ext.same-assets.com/314997060/1117640089.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/Save-The-Foster-112121588205964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <img src="https://ext.same-assets.com/314997060/558198578.png" alt="Facebook" className="w-6 h-6" />
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
