import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="AuthLayout flex h-dvh w-full items-center justify-center px-4 sm:px-8">
      {children}
    </div>
  );
}
