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
  title: "Nadbużański Zakątek – Domek z bala nad Bugiem | Wola Uhruska",
  description:
    "Domek z bala dla 7 osób w Woli Uhruskiej. Prywatne stawy, grill gazowy, hamaki, wędzarnia. Cisza i natura nad rzeką Bug.",
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
