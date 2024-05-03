import Image from "next/image";

import { TVideo } from "@/lib/helper";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";

export default function VideoPreview({
  videoData,
  className,
}: {
  videoData: TVideo;
  className?: string;
}) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <Image
        fill
        sizes={"100%"}
        src={videoData.thumbnail}
        alt={videoData.title}
        className="object-cover"
      />
      <span className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-4  bg-opacity-50 bg-gradient-to-br from-black to-transparent">
        <h1 className="absolute left-32 top-32 text-4xl text-white">
          {videoData.title}
        </h1>
        <h2 className="absolute left-32 top-52 text-2xl text-white">
          {videoData.description}
        </h2>
        <Button className="absolute left-32 top-72" variant="default">
          Watch!
        </Button>
      </span>
    </div>
  );
}
