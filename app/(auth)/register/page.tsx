import AuthCard from "@/components/AuthCard";
export default function RegisterPage() {
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
    />
  );
}
