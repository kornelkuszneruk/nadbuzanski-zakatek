import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nadbuzanskizakatek.pl"),
  title: "Nadbużański Zakątek – drewniany domek nad Bugiem | Wola Uhruska",
  description:
    "Drewniany domek dla 7 osób w Woli Uhruskiej. Prywatne stawy, grill gazowy, hamaki, wędzarnia. Cisza i natura nad rzeką Bug.",
  openGraph: {
    title: "Nadbużański Zakątek – drewniany domek nad Bugiem",
    description:
      "Drewniany domek dla 7 osób w Woli Uhruskiej. Prywatne stawy, grill gazowy, hamaki, wędzarnia. Cisza i natura nad rzeką Bug.",
    url: "https://www.nadbuzanskizakatek.pl",
    siteName: "Nadbużański Zakątek",
    images: [
      {
        url: "https://www.nadbuzanskizakatek.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nadbużański Zakątek – drewniany domek nad Bugiem",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-sand text-forest">{children}</body>
    </html>
  );
}
