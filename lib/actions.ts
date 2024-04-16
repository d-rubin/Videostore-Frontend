"use server";

import { cookies } from "next/headers";
import { LoginSchema, RegisterSchema, TLoginSchema } from "./schemas";
import { redirect } from "next/navigation";

export const login = async (data: TLoginSchema) => {
  const result = LoginSchema.safeParse(data);
  if (!result.success) {
    return { errors: result.error.issues.map((issue) => issue.message) };
  }

  try {
    const apiResult = await fetch(`${process.env.API_URL}/auth/login/`, {
      method: "POST",
      body: JSON.stringify(result.data),
    });
    const apiData = await apiResult.json();
    if (apiData.status === 200) {
      cookies().set("AuthToken", apiData.token);
      return { errors: [], status: 200, data: apiData };
    }
    return { errors: [apiData.message] };
  } catch (error: any) {
    return { errors: [error.message] };
  }
};

export const register = async (data: TLoginSchema) => {
  const result = RegisterSchema.safeParse(data);
  if (!result.success) {
    return { errors: result.error.issues.map((issue) => issue.message) };
  }

  try {
    const apiResult = await fetch(`${process.env.API_URL}/auth/register/`, {
      method: "POST",
      body: JSON.stringify(result.data),
    });
    const apiData = await apiResult.json();
    if (apiData.status === 200) {
      redirect("/login");
    }
    return { errors: [apiData.message] };
  } catch (error: any) {
    return { errors: [error.message] };
  }
};
