"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#1e2029] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Save The Foster</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Dedicated to supporting foster children and families. Together, we can make a difference in young lives.
            </p>
            <Button
              className="bg-white text-[#1e2029] hover:bg-gray-100 transition-colors"
              onClick={() => window.open('http://paypal.me/SaveTheFoster', '_blank')}
            >
              Donate Now
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/team" className="block text-gray-300 hover:text-white transition-colors">
                Team
              </Link>
              <Link href="/upcoming-projects" className="block text-gray-300 hover:text-white transition-colors">
                Upcoming Projects
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <nav className="space-y-2">
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              <a 
                href="http://paypal.me/SaveTheFoster" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Donate
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Save The Foster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}