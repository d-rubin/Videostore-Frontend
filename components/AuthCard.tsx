import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type AuthCardProps = {
  title: string;
  inputs: {
    name: string;
    placeholder: string;
    type?: string;
  }[];
  link: {
    description: string;
    label: string;
    href: string;
  };
  handleSubmit: (formData: FormData) => void;
  error?: string;
  registered?: "true" | "false";
};

const AuthCard = ({
  title,
  link,
  inputs,
  handleSubmit,
  error,
  registered,
}: AuthCardProps) => {
  return (
    <Card className="flex w-full flex-col gap-8 px-8 py-10 opacity-90 sm:w-[25rem] sm:px-16">
      <>
        <h1 className="text-4xl font-semibold">{title}</h1>
        {registered === "true" && (
          <Alert variant="success">
            <AlertTitle>Your registration was sucessful!</AlertTitle>
            <AlertDescription>
              An email has been sent to you with an activation link.
            </AlertDescription>
          </Alert>
        )}
        <form action={handleSubmit} className="flex flex-col gap-4">
          {inputs.map((input) => (
            <Input
              key={crypto.randomUUID()}
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
            />
          ))}
          {error && (
            <p className="text-sm text-primary text-opacity-100">
              {decodeURIComponent(error)}
            </p>
          )}
          <Button type="submit">{title}</Button>
          <span className="flex w-fit flex-row gap-2">
            <p className="opacity-70">{link.description}</p>
            <Link href={link.href}>{link.label}</Link>
          </span>
        </form>
      </>
    </Card>
  );
};

export default AuthCard;
