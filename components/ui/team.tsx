'use client';

import React from "react";
import Image from "next/image";
import { cn } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaLinkedinIn } from "react-icons/fa";

export interface SocialLink {
  platform: "linkedin";
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  initials: string;
  socials?: SocialLink[];
}

export interface Team4Props {
  badge?: string;
  heading?: string;
  description?: string;
  members?: TeamMember[];
  className?: string;
}

const defaultMembers: TeamMember[] = [
  {
    id: "himanshu",
    name: "Himanshu Kumar Mahto",
    role: "Team Lead",
    avatar: "/team/himanshu-kumar-mahto.jpg",
    initials: "HM",
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/himanshu-kumar-mahto-a1b731324",
      },
    ],
  },
  {
    id: "ayush",
    name: "Ayush Kumar",
    role: "Technical Architect",
    avatar: "/team/ayush-kumar.png",
    initials: "AK",
    socials: [{ platform: "linkedin", url: "https://www.linkedin.com/in/helo-ayush" }],
  },
  {
    id: "amritesh",
    name: "Amritesh Kumar Rai",
    role: "On-Device AI Engineer",
    avatar: "/team/amritesh-kumar-rai.png",
    initials: "AR",
    socials: [{ platform: "linkedin", url: "https://www.linkedin.com/in/amritesh-dev/" }],
  },
  {
    id: "nishchay",
    name: "Nishchay Saluja",
    role: "Neural Model Engineer",
    avatar: "/team/nishchay-saluja.jpg",
    initials: "NS",
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/nishchay-saluja-10aabcd",
      },
    ],
  },
  {
    id: "prihyal",
    name: "Prihyal Jain",
    role: "Research and Development",
    avatar: "/team/prihyal-jain.png",
    initials: "PJ",
    socials: [{ platform: "linkedin", url: "https://www.linkedin.com/in/priyhaljain" }],
  },
  {
    id: "kunj",
    name: "Kunj Garg",
    role: "Kotlin App Developer",
    avatar: "/team/kunj-garg.jpg",
    initials: "KG",
    socials: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/kunj-garg-72991938a",
      },
    ],
  },
];

function MemberAvatar({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = React.useState(false);
  const showImage = member.avatar && !imgError;

  return (
    <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full bg-[#0B1220] ring-1 ring-slate-200 ring-offset-4 ring-offset-[#F7F9FB] transition-all duration-300 group-hover:ring-slate-300 sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-44 lg:w-44 xl:h-52 xl:w-52">
      {showImage ? (
        <Image
          src={member.avatar}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(max-width: 640px) 160px, (max-width: 1280px) 208px, 208px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0B1220] via-[#16233d] to-[#1B2A41]"
        >
          <span className="text-4xl font-bold tracking-tight text-white/90">
            {member.initials}
          </span>
        </div>
      )}
    </div>
  );
}

export function Team4({
  badge = "Our team",
  heading = "The people behind iTantra",
  description = "Engineers and researchers building off-grid rescue technology for India.",
  members = defaultMembers,
  className,
}: Team4Props) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl", className)}>
      <div className="mb-12 flex flex-col items-center text-center md:mb-20">
        {badge && (
          <Badge variant="outline" className="mb-6 px-4 py-1.5">
            {badge}
          </Badge>
        )}

        {heading && (
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#1B2A41] md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        )}

        {description && (
          <p className="max-w-2xl text-base text-slate-500 md:text-lg">
            {description}
          </p>
        )}
      </div>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
        {members.map((member) => (
          <div key={member.id} className="group flex flex-col items-center">
            <MemberAvatar member={member} />

            <div className="text-center">
              <h3 className="mb-1 text-lg font-medium text-[#1B2A41]">
                {member.name}
              </h3>
              <p className="mb-4 text-sm text-slate-500">{member.role}</p>
            </div>

            {member.socials && member.socials.length > 0 && (
              <div className="flex items-center gap-4">
                {member.socials.map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    className="text-slate-400 transition-colors hover:text-[#0B1220]"
                    aria-label={`${member.name} on ${social.platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team4;
