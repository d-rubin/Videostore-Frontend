"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils/cn";
import { SyntheticEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { changeResolution } from "@/lib/actions";

export function ResolutionSelect({ className }: { className?: string }) {
  const searchParams = useSearchParams();

  return (
    <Select
      onValueChange={changeResolution}
      defaultValue={searchParams.get("resolution") ?? "360"}
    >
      <SelectTrigger className={cn("w-[180px]", className)}>
        <SelectValue placeholder="Select a resolution" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="360">360p</SelectItem>
          <SelectItem value="480">480p</SelectItem>
          <SelectItem value="720">720p</SelectItem>
          <SelectItem value="1080">1080p</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
