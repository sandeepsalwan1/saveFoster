"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#1e2029]">
          Save The Foster
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-[#1e2029] transition-colors">Home</Link>
          <Link href="/upcoming-projects" className="text-gray-700 hover:text-[#1e2029] transition-colors">Upcoming Projects</Link>
          <Link href="/about" className="text-gray-700 hover:text-[#1e2029] transition-colors">About Us</Link>
          <Link href="/team" className="text-gray-700 hover:text-[#1e2029] transition-colors">Team</Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#1e2029] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-[#1e2029] hover:bg-[#2a2d3a] text-white transition-colors"
            onClick={() => window.open('http://paypal.me/SaveTheFoster', '_blank')}
          >
            Donate
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-2 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-[#1e2029]">Home</Link>
            <Link href="/upcoming-projects" className="block py-2 text-gray-700 hover:text-[#1e2029]">Upcoming Projects</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-[#1e2029]">About Us</Link>
            <Link href="/team" className="block py-2 text-gray-700 hover:text-[#1e2029]">Team</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-[#1e2029]">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
