"use client";

import { useParams } from "next/navigation";
import { TResolution } from "@/lib/actions";
import VideoJS from "@/components/VideoPlayer";
import { useRef } from "react";

export function getSingleVideoUrl(
  title: string,
  resolution: TResolution = "360",
) {
  return `${process.env.API_URL}/videos/download/${title}_${resolution}/`;
}

export default function Home() {
  const params = useParams<{ videoId: string }>();
  const videoUrl = getSingleVideoUrl(params.videoId);
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoUrl,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <main>
      <div className="aspect-video w-full">
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </main>
  );
}
