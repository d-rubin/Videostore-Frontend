import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="AuthLayout flex items-center justify-center px-4 sm:px-8">
      {children}
    </main>
  );
}
