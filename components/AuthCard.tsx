"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login, register } from "@/lib/actions";
import { LoginSchema, RegisterSchema } from "@/lib/schemas";
import { usePathname } from "next/navigation";
import { useState } from "react";

type AuthCardProps = {
  title: string;
  inputs: {
    name: string;
    placeholder: string;
  }[];
  link: {
    description: string;
    label: string;
    href: string;
  };
};

const AuthCard = ({ title, link, inputs }: AuthCardProps) => {
  const pathname = usePathname();
  const [errors, setErrors] = useState<string[]>([]);
  const validateLogin = async (formData: FormData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    const result = LoginSchema.safeParse({ username, password });
    if (!result.success) {
      return setErrors(result.error.issues.map((error) => error.message));
    }

    return setErrors((await login(result.data)).errors);
  };

  const validateRegister = async (formData: FormData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    const password2 = formData.get("password2");
    const email = formData.get("email");

    if (password !== password2) return setErrors(["Passwords do not match"]);

    const result = RegisterSchema.safeParse({ username, password, email });
    if (!result.success) {
      return setErrors(result.error.issues.map((error) => error.message));
    }

    return setErrors((await register(result.data)).errors);
  };

  const handleSubmit = (formData: FormData) => {
    setErrors([]);
    if (pathname.includes("/login")) {
      validateLogin(formData);
    } else {
      validateRegister(formData);
    }
  };

  return (
    <Card className="flex w-full flex-col gap-8 px-8 py-10 opacity-90 sm:w-[25rem] sm:px-16">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <form
        // action={pathname.includes("/login") ? validateLogin : validateRegister}
        action={handleSubmit}
        className="flex flex-col gap-4"
      >
        {inputs.map((input) => (
          <Input name={input.name} placeholder={input.placeholder} />
        ))}
        {!!errors.length && <p>{errors.map((error) => `${error}. `)}</p>}
        <Button type="submit">{title}</Button>
        <span className="flex w-fit flex-row gap-2">
          <p className="opacity-70">{link.description}</p>
          <Link href={link.href}>{link.label}</Link>
        </span>
      </form>
    </Card>
  );
};

export default AuthCard;
