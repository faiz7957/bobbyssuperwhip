import type { Metadata } from "next";
import "./globals.css";

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

  alternates: {
    canonical: "https://bobbyssuperwhip.co.uk",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}