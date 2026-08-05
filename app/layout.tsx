import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bobby's Super Whip | Ice Cream Van Hire | Walsall & West Midlands",
    template: "%s | Bobby's Super Whip",
  },

  description:
    "Hire Bobby's Super Whip for premium whippy ice cream, luxury sundaes and refreshing slush at weddings, birthdays, schools, nurseries, corporate events and festivals across Walsall, the West Midlands and surrounding areas. Fully insured with a 5-star food hygiene rating.",

  keywords: [
    "Bobby's Super Whip",
    "Bobbys Super Whip",
    "Ice Cream Van Walsall",
    "Ice Cream Van Hire Walsall",
    "Ice Cream Van West Midlands",
    "Ice Cream Van Hire West Midlands",
    "Ice Cream Van Near Me",
    "Whippy Ice Cream",
    "Soft Serve Ice Cream",
    "Luxury Sundaes",
    "Sherbet Sundaes",
    "Premium Slush",
    "Slush Machine Hire",
    "Wedding Ice Cream Van",
    "Birthday Ice Cream Van",
    "School Ice Cream Van",
    "Nursery Ice Cream Van",
    "Corporate Event Ice Cream Van",
    "Festival Ice Cream Van",
    "Event Catering Walsall",
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
  title: "Bobby's Super Whip | Ice Cream Van Hire | Walsall & West Midlands",
  description:
    "Luxury whippy ice cream, premium slush and delicious desserts for weddings, birthdays, schools, festivals and corporate events across Walsall and the West Midlands.",
  url: "https://bobbyssuperwhip.co.uk",
  siteName: "Bobby's Super Whip",
  locale: "en_GB",
  type: "website",

  images: [
    {
      url: "/images/bobbys-super-whip-google.png",
      width: 1200,
      height: 630,
      alt: "Bobby's Super Whip Ice Cream Van",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Bobby's Super Whip | Ice Cream Van Hire",
  description:
    "Luxury whippy ice cream, premium slush and delicious desserts across Walsall and the West Midlands.",
  images: ["/images/bobbys-super-whip-google.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bobby's Super Whip",
  url: "https://bobbyssuperwhip.co.uk",
  image: "https://bobbyssuperwhip.co.uk/images/bobbys-super-whip-google.png",
  logo: "https://bobbyssuperwhip.co.uk/favicon.ico",
  email: "bookings@bobbyssuperwhip.co.uk",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Walsall",
    addressRegion: "West Midlands",
    addressCountry: "GB",
  },

  areaServed: [
    "Walsall",
    "Aldridge",
    "Bloxwich",
    "Brownhills",
    "Pelsall",
    "Willenhall",
    "Great Barr",
    "Sutton Coldfield",
    "Cannock",
    "Lichfield",
    "Wednesbury",
    "West Bromwich",
    "Wolverhampton",
    "West Midlands",
  ],

  description:
    "Luxury ice cream van hire serving Walsall and the West Midlands for weddings, birthdays, schools, nurseries, festivals and corporate events.",

  priceRange: "££",

  servesCuisine: "Ice Cream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

                {children}

        <GoogleAnalytics gaId="G-9WN5XZ0X5C" />
      </body>
    </html>
  );
}