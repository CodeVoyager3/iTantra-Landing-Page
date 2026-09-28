'use client';

import { Reveal } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  HiBell,
  HiDatabase,
  HiMap,
  HiMicrophone,
  HiWifi,
} from "react-icons/hi";

function IconTile({
  tint,
  children,
}: {
  tint: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${tint} mb-3 size-fit rounded-xl p-px`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white shadow-sm">
        {children}
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
      {children}
    </span>
  );
}

const CARD_HOVER =
  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,18,32,0.10)]";

export default function MissionFeatures() {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <Reveal>
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.16em] text-[#E5484D] lg:text-sm">
          Core Mission Modules
        </p>
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-[#1B2A41] sm:text-4xl lg:text-[40px]">
          Four Powerful Tools. One Mission.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-400 lg:text-lg">
          From distress alerts to rescue coordination, iTantra gives you
          everything you need to communicate, navigate and save lives — even
          when there&apos;s no signal.
        </p>
      </Reveal>

      <div className="mt-12 grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:mt-16">
        <Reveal delay={0} y={20} className="h-full">
          <Card className={CARD_HOVER}>
            <CardContent>
              <IconTile tint="bg-[#FBEDEE]">
                <HiBell className="h-5 w-5 text-[#E5484D]" />
              </IconTile>
              <h3 className="text-lg font-semibold text-[#1B2A41]">
                SOS Distress Beacon
              </h3>
              <p className="mb-4 mt-1 text-sm leading-relaxed text-slate-500">
                Broadcast distress with auto voice over a 250m mesh in 10
                Indian regional languages.
              </p>
              <Pill>1-tap emergency alert</Pill>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.08} y={20} className="h-full">
          <Card className={CARD_HOVER}>
            <CardContent>
              <IconTile tint="bg-[#E9F0FB]">
                <HiMicrophone className="h-5 w-5 text-[#3D82F6]" />
              </IconTile>
              <h3 className="text-lg font-semibold text-[#1B2A41]">
                Walkie-Talkie Mesh
              </h3>
              <p className="mb-4 mt-1 text-sm leading-relaxed text-slate-500">
                Hands-free team comms with Auto-VAD, live peer roster and
                signal indicators.
              </p>
              <Pill>Direct P2P voice</Pill>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.16} y={20} className="row-span-2 h-full">
          <Card className={`flex h-full flex-col justify-between ${CARD_HOVER}`}>
            <CardContent>
              <IconTile tint="bg-[#E9F5EE]">
                <HiMap className="h-5 w-5 text-[#27A567]" />
              </IconTile>
              <h3 className="mb-2 text-lg font-semibold text-[#1B2A41]">
                Search &amp; Rescue Radar Hub
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-500">
                Compass-oriented field view with victim pinpoints, live
                distance and instant voice link.
              </p>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between rounded-lg bg-[#F7F9FB] px-3 py-2 text-xs">
                  <span className="text-slate-500">Victim pinpointing</span>
                  <span className="font-semibold text-[#1B2A41]">
                    Live distance
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#F7F9FB] px-3 py-2 text-xs">
                  <span className="text-slate-500">Field minimap</span>
                  <span className="font-semibold text-[#1B2A41]">
                    Compass-oriented
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#F7F9FB] px-3 py-2 text-xs">
                  <span className="text-slate-500">Voice link</span>
                  <span className="font-semibold text-[#1B2A41]">
                    1-to-1 / broadcast
                  </span>
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-6">
              <Pill>Rescue coordination</Pill>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.1} y={20} className="h-full">
          <Card className={CARD_HOVER}>
            <CardContent>
              <IconTile tint="bg-[#EFEAFB]">
                <HiDatabase className="h-5 w-5 text-[#7C5CF6]" />
              </IconTile>
              <h3 className="text-lg font-semibold text-[#1B2A41]">
                Neural Model Hub
              </h3>
              <p className="mb-4 mt-1 text-sm leading-relaxed text-slate-500">
                Manage offline AI models with safe delete, 1-tap restore and
                sensor diagnostics.
              </p>
              <Pill>On-device AI</Pill>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.18} y={20} className="h-full">
          <Card className={CARD_HOVER}>
            <CardContent>
              <IconTile tint="bg-[#E8EDF3]">
                <HiWifi className="h-5 w-5 text-[#0B1220]" />
              </IconTile>
              <h3 className="text-lg font-semibold text-[#1B2A41]">
                Off-Grid Mesh Core
              </h3>
              <p className="mb-4 mt-1 text-sm leading-relaxed text-slate-500">
                Wi-Fi Direct plus BLE beacons keep every device connected with
                no signal required.
              </p>
              <Pill>No signal needed</Pill>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
