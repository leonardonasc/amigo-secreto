import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Amigo Secreto",
  description: "Aplicação para organizar Amigo Secreto de forma fácil e divertida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable}`}>{children}</body>
    </html>
  );
}
