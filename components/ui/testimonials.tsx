'use client';

import { Reveal } from "@/components/motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    heading: '"Worked when nothing else did"',
    quote:
      "We coordinated the entire landslide response over the mesh. No mobile signal, yet every volunteer stayed in sync.",
    author: "Neha Sharma",
    role: "Volunteer",
    company: "Wayanad response",
    companyColor: "text-[#E5484D]",
    initials: "NS",
    fallbackClass: "bg-[#FBEDEE] text-[#E5484D]",
  },
  {
    id: 2,
    heading: '"Found victims in minutes"',
    quote:
      "The search radar gave us live distance and direction. Our team reached three trapped victims in under twenty minutes.",
    author: "Rohit Singh",
    role: "First Responder, NDRF",
    company: "Bihar flood ops",
    companyColor: "text-[#3D82F6]",
    initials: "RS",
    fallbackClass: "bg-[#E9F0FB] text-[#3D82F6]",
  },
  {
    id: 3,
    heading: '"Part of our preparedness kit"',
    quote:
      "Clear, dependable and easy to teach. iTantra is now part of every community drill we run in Kochi.",
    author: "Priya Nair",
    role: "Community Lead",
    company: "Kochi drills",
    companyColor: "text-[#7C5CF6]",
    initials: "PN",
    fallbackClass: "bg-[#EFEAFB] text-[#7C5CF6]",
  },
  {
    id: 4,
    heading: '"Team comms without towers"',
    quote:
      "Above 12,000 feet there is no network. The walkie-talkie mesh kept all four rope teams connected throughout the expedition.",
    author: "Arjun Mehta",
    role: "Trek Lead",
    company: "Himachal expedition",
    companyColor: "text-[#27A567]",
    initials: "AM",
    fallbackClass: "bg-[#E9F5EE] text-[#27A567]",
  },
  {
    id: 5,
    heading: '"Onboarding took minutes"',
    quote:
      "Our field volunteers installed the app and joined the mesh in minutes. No training overhead, no edge cases.",
    author: "Kavya Reddy",
    role: "NGO Coordinator",
    company: "Hyderabad chapter",
    companyColor: "text-[#B45309]",
    initials: "KR",
    fallbackClass: "bg-[#FEF3C7] text-[#B45309]",
  },
  {
    id: 6,
    heading: '"Clarity during chaos"',
    quote:
      "During the flood alerts, the broadcast channel cut through rumours. One source of truth for the whole district team.",
    author: "Vikram Rao",
    role: "District Official",
    company: "Assam relief cell",
    companyColor: "text-[#0B1220]",
    initials: "VR",
    fallbackClass: "bg-[#E8EDF3] text-[#0B1220]",
  },
];

export default function Testimonials1() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Reveal>
        <div className="mb-10 flex flex-col items-center text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#E5484D] lg:text-sm">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A41] sm:text-4xl">
            Trusted by people who lead rescue
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 lg:text-lg">
            From NDRF responders to neighbourhood volunteers — field feedback
            from across India.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} y={20}>
        <div className="relative mx-auto max-w-7xl">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="px-1 py-2">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="flex h-full min-h-[320px] select-none flex-col justify-between rounded-3xl p-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(11,18,32,0.10)]">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold leading-tight text-[#1B2A41]">
                        {testimonial.heading}
                      </h3>
                      <p className="mb-8 text-[15px] leading-relaxed text-slate-500">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className={testimonial.fallbackClass}>
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-[#1B2A41]">
                          {testimonial.author}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-500">
                          {testimonial.role}{" "}
                          <span className={testimonial.companyColor}>
                            · {testimonial.company}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex w-full justify-center gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </Reveal>
    </div>
  );
}
