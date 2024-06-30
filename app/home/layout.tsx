import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <main className="HomeLayout h-full bg-black">{children}</main>;
}
