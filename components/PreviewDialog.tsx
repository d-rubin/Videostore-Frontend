"use client";

import VideoPreview from "@/components/VideoPreview";
import { TVideo } from "@/lib/helper";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function PreviewDialog({ videoData }: { videoData: TVideo }) {
  const { replace } = useRouter();

  const handleBodyClick = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).nodeName !== "SPAN") {
      replace("/home");
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-full" onClick={handleBodyClick}>
      <dialog
        open
        id="dialog"
        className="absolute left-1/2 top-1/2 z-10 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl object-cover"
      >
        <VideoPreview videoData={videoData} />
      </dialog>
    </div>
  );
}
