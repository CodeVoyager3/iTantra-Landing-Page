'use client';

import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

/** Direct link to the Android package, hosted as a GitHub Release asset. */
export const APK_URL =
  "https://github.com/CodeVoyager3/iTantra-Landing-Page/releases/download/app/app-release.apk";
export const APK_NAME = "iTantra.apk";
export const APK_SIZE_LABEL = "~155 MB";

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

export function DownloadApkButton({
  store,
  size = "lg",
}: {
  store: "play" | "apple";
  size?: "lg" | "md";
}) {
  const [open, setOpen] = React.useState(false);
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    cancelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open ]);

  const confirmDownload = () => {
    const a = document.createElement("a");
    a.href = APK_URL;
    a.download = APK_NAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setOpen(false);
  };

  const isLg = size === "lg";
  const isPlay = store === "play";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`flex items-center gap-3 rounded-xl border border-white/30 bg-black/70 transition-colors hover:border-white/60 ${
          isLg ? "px-6 py-3" : "px-5 py-2.5"
        }`}
      >
        {isPlay ? (
          <GooglePlayIcon className={isLg ? "h-8 w-8" : "h-7 w-7"} />
        ) : (
          <AppleIcon className={`${isLg ? "h-9 w-9" : "h-6 w-6"} text-white`} />
        )}
        <span className="flex flex-col text-left leading-tight">
          <span
            className={`font-medium text-white/80 ${
              isLg
                ? "text-[11px] uppercase tracking-wider"
                : "text-[10px] uppercase tracking-wider"
            }`}
          >
            {isPlay ? "Get it on" : "Download on the"}
          </span>
          <span
            className={`font-semibold text-white ${isLg ? "text-xl" : "text-lg"}`}
          >
            {isPlay ? "Google Play" : "App Store"}
          </span>
        </span>
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Confirm download"
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/iTantraLogo.png"
                alt="iTantra logo"
                width={96}
                height={96}
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold tracking-tight text-[#1B2A41]">
                  Download iTantra?
                </h3>
                <p className="text-xs text-slate-500">
                  Android app package (APK)
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              You are about to download the iTantra app file ({APK_SIZE_LABEL})
              to your device. You can install it by opening the file and
              allowing installs from unknown sources when prompted.
            </p>

            <div className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-500">
              {APK_NAME} · Android · {APK_SIZE_LABEL}
            </div>

            <div className="mt-6 flex gap-3">
              <button
                ref={cancelRef}
                type="button"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDownload}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#E5484D] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c93a41]"
              >
                <HiDownload className="h-4 w-4" />
                Download
              </button>
            </div>
          </div>
          </div>,
          document.body,
        )}
    </>
  );
}
