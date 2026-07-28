import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bobby's Super Whip | Ice Cream Van Hire | Walsall & West Midlands",
    template: "%s | Bobby's Super Whip",
  },
  description:
    "Bobby's Super Whip provides luxury whippy ice cream, premium slush and desserts for birthdays, weddings, schools, nurseries and corporate events across Walsall and the West Midlands.",
  keywords: [
    "Ice Cream Van Walsall",
    "Ice Cream Van Hire",
    "Whippy Ice Cream",
    "Slush",
    "Wedding Ice Cream Van",
    "Birthday Ice Cream Van",
    "School Ice Cream Van",
    "Corporate Events",
    "West Midlands",
    "Bobby's Super Whip",
  ],
  authors: [{ name: "Bobby's Super Whip" }],
  creator: "Bobby's Super Whip",
  publisher: "Bobby's Super Whip",
  metadataBase: new URL("https://bobbyssuperwhip.co.uk"),
  openGraph: {
    title: "Bobby's Super Whip",
    description:
      "Luxury whippy ice cream and premium slush for events across Walsall and the West Midlands.",
    url: "https://bobbyssuperwhip.co.uk",
    siteName: "Bobby's Super Whip",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <WhatsAppButton />
      </body>
    </html>
  );
}