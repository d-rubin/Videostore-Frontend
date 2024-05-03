import { ReactNode } from "react";

export default function HomeLayout({
  children,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return <main className="h-full bg-gray-900">{children}</main>;
}
