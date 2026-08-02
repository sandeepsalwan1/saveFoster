"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-6 shadow-sm sm:p-8">
      <div>
        <Label htmlFor="name" className="text-gray-700">Name</Label>
        <Input id="name" name="name" autoComplete="name" required className="mt-1" placeholder="Your full name" />
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-700">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required className="mt-1" placeholder="your.email@example.com" />
      </div>

      <div>
        <Label htmlFor="subject" className="text-gray-700">Subject</Label>
        <Input id="subject" name="subject" required className="mt-1" placeholder="Volunteer, partnership, or question" />
      </div>

      <div>
        <Label htmlFor="message" className="text-gray-700">Message</Label>
        <Textarea id="message" name="message" required rows={6} className="mt-1" placeholder="How would you like to get involved?" />
      </div>

      <div className="text-center">
        <Button type="submit" className="bg-[#2a316b] px-8 py-3 text-white hover:bg-[#1e2456]">
          Open Email to Send
        </Button>
      </div>
    </form>
  );
}
