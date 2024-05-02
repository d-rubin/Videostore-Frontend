import AuthCard from "@/components/AuthCard";
import { login } from "@/lib/actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { registered?: "true" | "false"; error?: string };
}) {
  return (
    <AuthCard
      title="Sign In"
      inputs={[
        { name: "username", placeholder: "Username", type: "text" },
        { name: "password", placeholder: "Password", type: "password" },
      ]}
      link={{
        description: "Neu bei Netflix?",
        label: "Jetzt registrieren",
        href: "/register",
      }}
      registered={searchParams?.registered}
      error={searchParams?.error}
      handleSubmit={login}
    />
  );
}
