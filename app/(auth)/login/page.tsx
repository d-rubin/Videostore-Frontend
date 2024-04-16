import AuthCard from "@/components/AuthCard";

export default function LoginPage() {
  return (
    <AuthCard
      title="Sign In"
      inputs={[
        { name: "username", placeholder: "Username" },
        { name: "password", placeholder: "Password" },
      ]}
      link={{
        description: "Neu bei Netflix?",
        label: "Jetzt registrieren",
        href: "/register",
      }}
    />
  );
}
