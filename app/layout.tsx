import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion";
import { ThemeProvider } from "@/components/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iTantra — Saves Lives When Networks Fail",
  description:
    "The sovereign, off-grid disaster transceiver & tactical rescue mesh. Because in a crisis, every second and every connection matters.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var t=localStorage.getItem("itantra-theme");var d=t==="dark"||((t===null||t==="system")&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d)}catch(e){}',
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
