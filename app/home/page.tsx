import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { getAllVideos } from "@/lib/actions";
import { TVideo } from "@/lib/helper";

export default async function HomePage() {
  const { data: videos } = await getAllVideos();

  return (
    <div className="align-to flex h-full w-full flex-col px-4 pt-8 sm:px-8">
      <div className="flex flex-wrap gap-4">
        {videos &&
          Array.isArray(videos) &&
          videos.map((video: TVideo) => (
            <Link
              key={video.description}
              href={`home/video/${video.title}`}
              className="group duration-200 hover:scale-105"
            >
              <Card className="relative h-40 w-56 rounded-2xl">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="rounded-2xl object-cover duration-200 group-hover:scale-105"
                />
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
