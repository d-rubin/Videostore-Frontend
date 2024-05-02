"use server";

import { cookies } from "next/headers";
import { LoginSchema, RegisterSchema, UploadSchema } from "./schemas";
import { redirect } from "next/navigation";

type TResolution = "360" | "480" | "720" | "1080";

export const login = async (formData: FormData) => {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };
  let redirectURL = "/login";

  const result = LoginSchema.safeParse(data);

  if (!result.success) {
    redirect(
      `${redirectURL}?error=${encodeURIComponent(result.error.issues.map((issue) => issue.message).join(". "))}`,
    );
  }

  try {
    const apiResult = await fetch(`${process.env.API_URL}/auth/login/`, {
      method: "POST",
      body: JSON.stringify(result.data),
      headers: {
        "Content-type": "application/json",
      },
    });

    const apiData = await apiResult.json();

    if (apiData.status === 200) {
      cookies().set("AuthToken", apiData.token);
      redirectURL = "/home";
    } else redirectURL = `/login?error=${encodeURIComponent(apiData.message)}`;
  } catch (error: any) {
    redirectURL = `/login?error=${encodeURIComponent(error.message)}`;
  }
  redirect(redirectURL);
};

export const register = async (formData: FormData) => {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  };
  let redirectURL = "/register";

  if (data.password !== formData.get("password2")) {
    redirectURL = `/register?error=${encodeURIComponent("Passwords do not match.")}`;
  }

  const result = RegisterSchema.safeParse(data);
  if (!result.success) {
    redirectURL = `/register?error=${encodeURIComponent(result.error.issues.map((issue) => issue.message).join(". "))}`;
  }

  try {
    if (result.success) {
      const apiResult = await fetch(`${process.env.API_URL}/auth/register/`, {
        method: "POST",
        body: JSON.stringify(result.data),
        headers: {
          "Content-type": "application/json",
        },
      });
      const apiData = await apiResult.json();
      if (apiData.status === 201) {
        redirectURL = "/login?registered=true";
      } else
        redirectURL = `/register?error=${encodeURIComponent(apiData.message)}`;
    }
  } catch (error: any) {
    redirectURL = `/register?error=${encodeURIComponent(error.message)}`;
  }
  redirect(redirectURL);
};

export async function getAllVideos() {
  const authToken = cookies().get("AuthToken")?.value;
  const response = await fetch(`${process.env.API_URL}/videos/`, {
    headers: {
      Authorization: `Token ${authToken}`,
      "Content-type": "application/json",
    },
  });
  if (response.ok) return response.json();
  return { data: null, status: 500, message: "Something went wrong" };
}

export async function getSingleVideo(
  title: string,
  resolution: TResolution = "360",
) {
  const authToken = cookies().get("AuthToken")?.value;
  const response = await fetch(
    `${process.env.API_URL}/videos/download/${title}_${resolution}`,
    {
      headers: {
        Authorization: `Token ${authToken}`,
        "Content-type": "application/octet-stream",
      },
    },
  );
  if (response.ok) return response.json();
  return { data: null, status: 500, message: "Something went wrong" };
}

export async function uploadVideo(formData: FormData) {
  const data = {
    file: formData.get("file"),
    title: formData.get("title"),
    description: formData.get("description"),
    thumbnail: formData.get("thumbnail"),
  };

  let redirectURL = "/home/upload";
  const result = UploadSchema.safeParse(data);

  if (!result.success) {
    redirectURL = `/home/upload?error=${encodeURIComponent(result.error.issues.map((issue) => issue.message).join(". "))}`;
  }

  try {
    const authToken = cookies().get("AuthToken")?.value;
    const response = await fetch(`${process.env.API_URL}/videos/upload/`, {
      headers: {
        Authorization: `Token ${authToken}`,
      },
      method: "POST",
      body: formData,
    });
    if (response.ok) redirectURL = "/home";
  } catch (error: any) {
    redirectURL = `/home/upload?error=${encodeURIComponent(error.message)}`;
  }
  redirect(redirectURL);
}
