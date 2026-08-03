"use client";

import type { FormEvent } from "react";
import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const interest = String(formData.get("interest") ?? "").trim();
    const interestLabel =
      interest === "both"
        ? "Donor and volunteer"
        : interest === "donor"
          ? "Donor"
          : "Volunteer";
    const subject = `Save The Foster ${interestLabel} Interest`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interest: ${interestLabel}`,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative space-y-6 overflow-hidden rounded-3xl border border-[#2a316b]/10 bg-white p-6 shadow-[0_24px_80px_rgba(42,49,107,0.12)] sm:p-9"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#f1c871]/30 blur-3xl" />

      <div className="relative grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" className="font-semibold text-[#24294f]">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            className="mt-2 h-12 rounded-xl border-gray-300 bg-[#fcfbf8]"
            placeholder="Your full name"
          />
        </div>

        <div>
          <Label htmlFor="email" className="font-semibold text-[#24294f]">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="mt-2 h-12 rounded-xl border-gray-300 bg-[#fcfbf8]"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="relative">
        <Label htmlFor="phone" className="font-semibold text-[#24294f]">
          Phone number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          maxLength={30}
          className="mt-2 h-12 rounded-xl border-gray-300 bg-[#fcfbf8]"
          placeholder="(555) 123-4567"
        />
      </div>

      <fieldset className="relative">
        <legend className="mb-3 font-semibold text-[#24294f]">
          How would you like to help?
        </legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["volunteer", "Volunteer"],
            ["donor", "Become a donor"],
            ["both", "Both"],
          ].map(([value, label], index) => (
            <label
              key={value}
              className="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-[#fcfbf8] px-4 py-3 text-sm font-semibold text-[#30365f] transition hover:border-[#2a316b]/40 has-[:checked]:border-[#2a316b] has-[:checked]:bg-[#eef0fb] has-[:checked]:ring-2 has-[:checked]:ring-[#2a316b]/10"
            >
              <input
                type="radio"
                name="interest"
                value={value}
                required
                defaultChecked={index === 0}
                className="h-4 w-4 accent-[#2a316b]"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="relative flex flex-col items-center gap-3">
        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-[#2a316b] px-8 text-base font-semibold text-white hover:bg-[#1e2456] sm:w-auto"
        >
          <HeartHandshake aria-hidden="true" className="mr-2 h-5 w-5" />
          Open Email to Send
        </Button>
        <p className="text-center text-xs leading-relaxed text-gray-500">
          Your email app will open with your information ready for you to review
          and send.
        </p>
      </div>
    </form>
  );
}
