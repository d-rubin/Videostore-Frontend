import type { Metadata } from "next";
import {Inter, Roboto} from "next/font/google";
import {ReactNode} from "react";
import Image from "next/image";
import background from "../public/background.png";
import "./globals.css";

const inter = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Videofix",
  description: "Watch your Videos from anywhere!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-GB" className="min-h-dvh">
      <body className={`${inter.className} min-h-dvh flex`}>
          {children}
      </body>
    </html>
  );
}
