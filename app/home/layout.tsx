import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-full bg-gray-900 px-4 pt-8 sm:px-8">{children}</main>
  );
}
