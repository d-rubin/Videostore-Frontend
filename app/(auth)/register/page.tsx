import AuthCard from "@/components/AuthCard";
import { register } from "@/lib/actions";
export default function RegisterPage({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  return (
    <AuthCard
      title="Sign up"
      inputs={[
        { name: "username", placeholder: "Username" },
        { name: "email", placeholder: "Email" },
        { name: "password", placeholder: "Password" },
        { name: "password2", placeholder: "Type password again" },
      ]}
      link={{
        href: "/login",
        description: "Already have an account?",
        label: "Sign in",
      }}
      handleSubmit={register}
      error={searchParams?.error}
    />
  );
}
