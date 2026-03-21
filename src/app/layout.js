import { Inter, Outfit } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tomiwa Ashade — Video Editor",
  description:
    "Portfolio of Tomiwa Ashade, a creative video editor with 5+ years of experience crafting compelling visual stories through purposeful and refined editing.",
  keywords: ["video editor", "Tomiwa Ashade", "motion graphics", "premiere pro", "after effects", "video production"],
  openGraph: {
    title: "Tomiwa Ashade — Video Editor",
    description:
      "Portfolio of Tomiwa Ashade, a creative video editor with 5+ years of experience crafting compelling visual stories.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
