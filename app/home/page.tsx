import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { getAllVideos } from "@/lib/actions";

type TVideo = {
  title: string;
  description: string;
  thumbnail: string;
};

export default async function HomePage() {
  const { data: videos } = await getAllVideos();

  return (
    <div className="align-to flex h-dvh w-full flex-col">
      <div className="flex flex-wrap gap-4 overflow-y-auto">
        {videos &&
          Array.isArray(videos) &&
          videos.map((video: TVideo) => (
            <Link
              key={video.title}
              href={`home/${video.title}`}
              className="group overflow-hidden rounded-2xl"
            >
              <Card className="relative h-40 w-56 rounded-2xl">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="rounded-2xl object-cover duration-200 animate-in animate-out group-hover:scale-110"
                />
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
