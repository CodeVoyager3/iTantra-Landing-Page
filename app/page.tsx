import Image from "next/image";
import {
  Float,
  Parallax,
  Reveal,
  SignalArcs,
} from "@/components/motion";
import MissionFeatures from "@/components/ui/mission-features";
import Testimonials1 from "@/components/ui/testimonials";
import TrustedGrid from "@/components/ui/trusted-grid";
import Team4 from "@/components/ui/team";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Team", href: "#team" },
  { label: "Download", href: "#download" },
];

const HERO_FEATURES = [
  {
    lines: ["Wi-Fi Direct", "P2P Mesh"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M12 20h.01" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <path d="M5 12.86a10 10 0 0 1 14 0" />
        <path d="M8.5 16.43a5 5 0 0 1 7 0" />
      </svg>
    ),
  },
  {
    lines: ["BLE", "Beacon"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="m7 7 10 10-5 5V2l5 5L7 17" />
      </svg>
    ),
  },
  {
    lines: ["On-Device", "AI (Offline)"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v2" />
        <path d="M15 2v2" />
        <path d="M9 20v2" />
        <path d="M15 20v2" />
        <path d="M2 9h2" />
        <path d="M2 15h2" />
        <path d="M20 9h2" />
        <path d="M20 15h2" />
      </svg>
    ),
  },
  {
    lines: ["Sovereign", "& Secure"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35Z"
        fill="#00D7FE"
      />
      <path d="M16.89 8.8 5.05 2.03l8.64 8.64 3.2-1.87Z" fill="#00F076" />
      <path d="M16.89 15.2 5.05 21.97l8.64-8.64 3.2 1.87Z" fill="#FF3A44" />
      <path
        d="M20.96 10.55l-2.62-1.53-3.42 3.42 3.42 3.42 2.62-1.53c.9-.53.9-1.83 0-2.36Z"
        fill="#FFC900"
      />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a6 6 0 0 0-6 6c0 4.5-1.41 5.96-2.74 7.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8a6 6 0 0 0-6-6Z" />
      <path d="M10.27 21a2 2 0 0 0 3.46 0Z" />
    </svg>
  );
}

const THEMES = [
  {
    name: "Light Air",
    desc: "Day mode, high clarity",
    active: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
  },
  {
    name: "Dark Stealth",
    desc: "Night missions, longer battery",
    active: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
  {
    name: "System Auto",
    desc: "Follows device setting",
    active: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="8" y="3" width="8" height="18" rx="2" />
        <path d="M12 18h.01" />
        <path d="M3.5 9.5a4.5 4.5 0 0 0 0 5" />
        <path d="m3.5 9.5 1.4 1.6" />
        <path d="m3.5 14.5 1.4-1.6" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <section
        id="home"
        className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0B1220]"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Parallax offset={50} className="absolute inset-0 scale-110">
            <Image
              src="/Rescuer bg image.png"
              alt=""
              fill
              sizes="100vw"
              preload
              className="object-cover object-[68%_38%]"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] from-[30%] via-[#0B1220]/70 via-[55%] to-[#0B1220]/5 to-[95%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/85 via-transparent via-[28%] to-transparent" />
          <div className="absolute inset-0 bg-[#0B1220]/70 lg:hidden" />
        </div>

        <header className="relative z-20 mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-6 sm:px-10">
          <a href="#home" className="flex items-center gap-2.5">
            <Image
              src="/iTantraLogo.png"
              alt="iTantra logo"
              width={510}
              height={489}
              preload
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold tracking-tight text-white">iTantra</span>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-white transition-colors hover:text-[#E5484D]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-[1200px] flex-1 grid-cols-1 items-center gap-14 px-6 pb-28 pt-6 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:pb-[9svh] lg:pt-2">
          <div>
            <Reveal y={16} duration={0.5}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E5484D]/70 bg-[#E5484D]/15 px-5 py-2">
                <BellIcon className="h-4 w-4 text-[#E5484D]" />
                <span className="text-sm font-semibold tracking-wide text-white">
                  Off-Grid&ensp;&bull;&ensp;Mesh&ensp;&bull;&ensp;AI Powered
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-9 text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl xl:text-[56px]">
                iTantra
                <br />
                <span className="text-[#E5484D]">Saves Lives</span> When
                <br />
                Networks Fail
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-slate-300 lg:text-lg">
                The sovereign, off-grid disaster transceiver &amp; tactical rescue
                mesh. Because in a crisis, every second and every connection
                matters.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-14 flex items-stretch divide-x divide-white/20">
              {HERO_FEATURES.map((feature, i) => (
                <div
                  key={feature.lines[0]}
                  className={`flex flex-col items-center gap-3 text-center ${
                    i === 0 ? "pr-6 sm:pr-7" : "px-6 sm:px-7"
                  }`}
                >
                  <span className="text-white">{feature.icon}</span>
                  <p className="text-[13px] font-medium leading-snug text-white">
                    {feature.lines[0]}
                    <br />
                    {feature.lines[1]}
                  </p>
                </div>
              ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#download"
                className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/70 px-6 py-3 transition-colors hover:border-white/60"
              >
                <GooglePlayIcon className="h-8 w-8" />
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/80">
                    Get it on
                  </span>
                  <span className="text-xl font-semibold text-white">Google Play</span>
                </span>
              </a>
              <a
                href="#download"
                className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/70 px-6 py-3 transition-colors hover:border-white/60"
              >
                <AppleIcon className="h-9 w-9 text-white" />
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-[11px] font-medium tracking-wider text-white/80">
                    Download on the
                  </span>
                  <span className="text-xl font-semibold text-white">App Store</span>
                </span>
              </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25} y={48} duration={0.9}>
            <Float amplitude={10} duration={7} className="relative mx-auto w-fit">
            <Image
              src="/hero-white-signal.png"
              alt=""
              width={510}
              height={489}
              preload
              className="pointer-events-none absolute -right-[14%] -top-[6%] z-0 h-auto w-[44%]"
            />
            <Image
              src="/device-mockup.png"
              alt="iTantra app showing the emergency SOS screen"
              width={361}
              height={691}
              preload
              className="relative z-10 h-auto w-[230px] drop-shadow-2xl sm:w-[280px] lg:w-[min(330px,40svh)] xl:w-[min(350px,40svh)]"
            />
            </Float>
          </Reveal>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[100px] w-full fill-[#F7F9FB] sm:h-[130px] lg:h-[18svh]"
        >
          <path d="M0 150V108C200 126 380 138 620 136C860 134 1140 72 1440 8V150Z" />
        </svg>
      </section>

      <section id="features" className="-mt-px bg-[#F7F9FB] px-6 py-20 sm:px-10 lg:py-24">
        <MissionFeatures />
      </section>

      <section id="themes" className="bg-white">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="px-6 py-16 sm:px-10 lg:py-20 lg:pl-16 xl:pl-24">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-[#1B2A41] xl:text-[34px]">
                Light &amp; Dark Stealth Theming
              </h2>
              <p className="mt-3 text-base text-slate-500 lg:text-lg">
                Choose your style. Stay focused. Always.
              </p>
            </Reveal>
            <div className="mt-10 grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-3">
              {THEMES.map((theme, i) => (
                <Reveal key={theme.name} delay={0.15 + i * 0.1} y={20}>
                  <div
                    className={`h-full rounded-xl p-5 ${
                      theme.active
                        ? "bg-[#0B1220]"
                        : "border border-slate-100 bg-white shadow-sm"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        theme.active
                          ? "bg-white/10 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {theme.icon}
                    </span>
                    <p
                      className={`mt-4 text-[15px] font-semibold ${
                        theme.active ? "text-white" : "text-[#1B2A41]"
                      }`}
                    >
                      {theme.name}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-slate-400">
                      {theme.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} y={32} duration={0.8}>
            <Image
              src="/dark-light-screen.png"
              alt="iTantra app shown in light and dark themes on two phones"
              width={2430}
              height={1728}
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      <section id="trusted" className="bg-white px-6 py-14 sm:px-10 lg:py-16">
        <TrustedGrid />
      </section>

      <section id="testimonials" className="bg-slate-50 px-6 py-16 sm:px-10 lg:py-20">
        <Testimonials1 />
      </section>

      <section id="download" className="bg-white px-4 pb-12 pt-6 sm:px-6">
        <Reveal y={32} duration={0.8}>
          <div className="relative mx-auto w-full max-w-[1200px]">
            <div className="relative isolate overflow-hidden rounded-3xl bg-[#0B1220]">
              <Parallax offset={30} className="absolute inset-0 scale-105">
                <Image
                  src="/footer.avif"
                  alt=""
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center"
                />
              </Parallax>
            <div className="absolute inset-0 bg-[#0B1220]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] from-[15%] via-[#0B1220]/55 via-[50%] to-[#0B1220]/10 to-[90%]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/50 via-transparent via-[35%] to-[#0B1220]/60" />

            <div className="relative z-10 flex min-h-[420px] flex-col p-8 sm:p-10 lg:min-h-[370px] lg:p-12">
              <div className="max-w-[520px]">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/hero-white-signal.png"
                    alt="iTantra logo"
                    width={510}
                    height={489}
                    className="h-9 w-9 object-contain"
                  />
                  <span className="text-xl font-bold tracking-tight text-white">iTantra</span>
                </div>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Be Prepared. Be Connected.
                </h2>
                <p className="mt-3 max-w-[400px] text-sm leading-relaxed text-white/75">
                  Download iTantra today and be part of a safer, stronger, more resilient
                  tomorrow.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href="#download"
                    className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/70 px-5 py-2.5 transition-colors hover:border-white/60"
                  >
                    <GooglePlayIcon className="h-7 w-7" />
                    <span className="flex flex-col text-left leading-tight">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-white/80">
                        Get it on
                      </span>
                      <span className="text-lg font-semibold text-white">Google Play</span>
                    </span>
                  </a>
                  <a
                    href="#download"
                    className="flex items-center gap-3 rounded-xl border border-white/30 bg-black/70 px-5 py-2.5 transition-colors hover:border-white/60"
                  >
                    <AppleIcon className="h-6 w-6 text-white" />
                    <span className="flex flex-col text-left leading-tight">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-white/80">
                        Download on the
                      </span>
                      <span className="text-lg font-semibold text-white">App Store</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <SignalArcs className="pointer-events-none absolute left-[62%] top-5 z-10 hidden h-auto w-20 sm:block lg:top-7 lg:w-24" />

            <Image
              src="/hands-device.png"
              alt="Gloved hands holding a phone showing the iTantra emergency SOS screen"
              width={611}
              height={408}
              className="pointer-events-none absolute bottom-0 left-[58%] z-10 h-auto w-[250px] -translate-x-1/2 sm:w-[310px] lg:left-[63%] lg:w-[430px]"
            />

            <div className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-3 sm:flex lg:right-10">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="#E5484D"
                className="h-5 w-5 shrink-0"
              >
                <path d="M12 2c.8 5.4 2.2 8.2 4.6 9.4 1.6.8 3.4 1 5.4.6-5.4 2.2-8.4 5.2-9.4 9-.4 1.4-.8 1.4-1.2 0-1-3.8-4-6.8-9.4-9 2 .4 3.8.2 5.4-.6C10.2 10.2 11.2 7.4 12 2Z" />
              </svg>
              <p className="text-right text-lg font-bold leading-snug text-white lg:text-xl">
                No Signal.
                <br />
                No Problem.
              </p>
            </div>
          </div>
          </div>
        </Reveal>
      </section>

      <section id="team" className="bg-[#F7F9FB] px-6 py-16 sm:px-10 lg:py-20">
        <Reveal y={24}>
          <Team4 />
        </Reveal>
      </section>

      <footer className="bg-white px-6 py-7 sm:px-10">
        <Reveal y={16} duration={0.5}>
          <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-5 md:flex-row md:justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/hero-white-signal.png"
              alt="iTantra logo"
              width={510}
              height={489}
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-bold tracking-tight text-[#1B2A41]">iTantra</span>
          </a>
          <nav className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-[#E5484D]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="flex items-center gap-2 text-[13px] text-slate-400">
            <span>Open Source</span>
            <span aria-hidden="true">|</span>
            <span>Apache License 2.0</span>
          </p>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
