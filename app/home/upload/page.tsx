"use client";

import React, { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";
import Cookies from "universal-cookie";
import { Button } from "@/components/ui/button";

export default function UploadPage() {
  const cookieStore = new Cookies();
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState({ type: "", content: "" });

  const uploadVideo = async (formData: FormData) => {
    try {
      const authToken = cookieStore.get("AuthToken");
      const response = await fetch(`${process.env.API_URL}/videos/upload/`, {
        headers: {
          Authorization: `Token ${authToken}`,
        },
        method: "POST",
        body: formData,
      });
      if (response.ok)
        setMessage({
          type: "success",
          content: "Video uploaded successfully!",
        });
      else {
        setMessage({ type: "error", content: "Failed to upload video." });
      }
    } catch (error: any) {
      setMessage({ type: "error", content: error.message });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    file && formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    await uploadVideo(formData);
  };

  return (
    <form
      className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2 px-4 md:max-w-[30rem]"
      onSubmit={handleSubmit}
    >
      {message.type === "success" && message.content && (
        <Alert variant="success">{message.content}</Alert>
      )}
      {message.type === "error" && message.content && (
        <Alert variant="destructive" className="text-primary">
          {message.content}
        </Alert>
      )}
      <label htmlFor="upload">Upload a Video</label>
      <Input
        id="upload"
        name="file"
        type="file"
        accept="video/*"
        required
        onChange={(e) => setFile(e.target.files![0])}
      />
      <label htmlFor="title">Enter a title</label>
      <Input
        id="title"
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Enter a description</label>
      <Input
        id="description"
        type="text"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit" className="mt-2">
        Upload
      </Button>
    </form>
  );
}
