import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { cn } from "@/lib/utils/cn";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Video-Store",
  description: "Watch your Videos from anywhere!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body
        className={cn(
          "font-roboto dark h-dvh min-h-dvh w-full",
          roboto.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
