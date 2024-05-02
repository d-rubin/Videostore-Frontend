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
        { name: "username", placeholder: "Username", type: "text" },
        { name: "email", placeholder: "Email", type: "email" },
        { name: "password", placeholder: "Password", type: "password" },
        {
          name: "password2",
          placeholder: "Type password again",
          type: "password",
        },
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
