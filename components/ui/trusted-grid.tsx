'use client';

import Image from "next/image";
import { Reveal } from "@/components/motion";

type Org = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

const ORGS: Org[] = [
  { name: "Hindustan Petroleum", logo: "/logos/hpcl.png", width: 416, height: 79 },
  { name: "IndianOil", logo: "/logos/indian-oil.png", width: 512, height: 612 },
  { name: "Tata Group", logo: "/logos/tata.png", width: 451, height: 414 },
  { name: "Reliance Industries", logo: "/logos/reliance.png", width: 380, height: 263 },
  { name: "ONGC", logo: "/logos/ongc.png", width: 600, height: 600 },
  { name: "Bharat Petroleum", logo: "/logos/bharat-petroleum.png", width: 213, height: 267 },
  { name: "Indian Railways", logo: "/logos/indian-railways.png", width: 512, height: 415 },
  { name: "NDMA India", logo: "/logos/ndma.png", width: 314, height: 317 },
];

const STATS = [
  { value: "28+", label: "States and UTs" },
  { value: "500+", label: "Rescue teams" },
  { value: "2M+", label: "Citizens protected" },
  { value: "4.9/5", label: "Average rating" },
];

function OrgCell({ org }: { org: Org }) {
  return (
    <div
      title={org.name}
      className="flex h-24 flex-col items-center justify-center gap-1.5 bg-white p-3 transition-colors duration-200 hover:bg-slate-50 sm:h-28"
    >
      <Image
        src={org.logo}
        alt={`${org.name} logo`}
        width={org.width}
        height={org.height}
        loading="lazy"
        className="h-9 w-auto max-w-[150px] object-contain opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 sm:h-10"
      />
      <span className="text-center text-[12px] font-medium leading-tight text-slate-500">
        {org.name}
      </span>
    </div>
  );
}

export default function TrustedGrid() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <Reveal>
        <div className="mb-8 flex flex-col items-center text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#E5484D] lg:text-sm">
            Trusted across India
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-[#1B2A41] sm:text-3xl">
            Deployed with rescue forces, public agencies and industry
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1} y={20}>
        <div className="grid grid-flow-row-dense grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4">
          {ORGS.slice(0, 3).map((org) => (
            <OrgCell key={org.name} org={org} />
          ))}

          <div className="relative col-span-2 row-span-2 flex min-h-[12rem] flex-col items-center justify-center overflow-hidden bg-[#0B1220] p-6 text-center sm:min-h-[14rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_10px)]"
            />
            <div className="relative">
              <h3 className="mx-auto max-w-[260px] text-lg font-medium leading-snug text-white sm:text-xl">
                Built for teams that respond and restore
              </h3>
              <p className="mx-auto mt-3 max-w-[280px] text-[13px] leading-relaxed text-white/60">
                Off-grid mesh for rescue forces, public agencies and industry —
                no signal required.
              </p>
            </div>
          </div>

          {ORGS.slice(3).map((org) => (
            <OrgCell key={org.name} org={org} />
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-slate-400">
          All logos are the property of their respective organisations.
        </p>
      </Reveal>

      <Reveal delay={0.15} y={16}>
        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-4 text-center">
              <dd className="text-xl font-bold tracking-tight text-[#1B2A41]">
                {stat.value}
              </dd>
              <dt className="mt-1 block text-[12px] font-medium text-slate-500">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
