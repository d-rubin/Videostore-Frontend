"use client";

import { useRef } from "react";
import videojs from "video.js";
import VideoJS from "@/components/VideoPlayer";
import { useParams } from "next/navigation";
import { TResolution } from "@/lib/actions";

export function getSingleVideoUrl(
  title: string,
  resolution: TResolution = "360",
) {
  return `${process.env.API_URL}/videos/download/${title}_${resolution}/`;
}

export default function Home() {
  const params = useParams<{ videoId: string }>();
  const playerRef = useRef(null);

  const videoJsOptionsM3u8 = {
    controls: true,
    autoplay: false,
    width: 400,
    sources: [
      {
        src: getSingleVideoUrl(params.videoId),
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    console.log(player.qualityLevels());

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
        <VideoJS options={videoJsOptionsM3u8} onReady={handlePlayerReady} />
      </div>
    </main>
  );
}
