import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EverGlow Dental | Premium Family & Cosmetic Dentistry",
  description: "Experience premium, state-of-the-art dental care at EverGlow Dental. From cosmetic transformations, dental implants, Invisalign, to expert family care. Book your appointment today.",
  keywords: ["dental clinic", "EverGlow Dental", "cosmetic dentistry", "dental implants", "Invisalign", "teeth whitening", "family dentist", "Springfield dentist"],
  authors: [{ name: "EverGlow Dental Team" }],
  openGraph: {
    title: "EverGlow Dental | Premium Family & Cosmetic Dentistry",
    description: "Experience premium, state-of-the-art dental care at EverGlow Dental. Leading family, implant, and aesthetic dentistry.",
    type: "website",
    locale: "en_US",
    siteName: "EverGlow Dental Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "EverGlow Dental Clinic",
    description: "State-of-the-art premium dental care and aesthetic treatments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-secondary">
        {children}
      </body>
    </html>
  );
}
