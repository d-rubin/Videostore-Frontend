import { Card } from "@/components/ui/card";
import Link from "next/link";
import { getAllVideos } from "@/lib/actions";

type TVideo = {
  title: string;
  description: string;
  thumbnail: string;
};

export default async function HomePage() {
  const { data: videos } = await getAllVideos();

  return (
    <div className="flex max-h-dvh flex-col">
      <h1 className="mb-8 text-2xl font-bold text-black">
        Welcome to the home page!
      </h1>
      <div className="flex flex-wrap gap-4 overflow-y-auto">
        {videos &&
          Array.isArray(videos) &&
          videos.map((video: TVideo) => (
            <Link key={video.title} href={`home/${video.title}`}>
              <Card key={video.title} className="relative h-40 w-56">
                {/*<Image*/}
                {/*  src={video.thumbnail}*/}
                {/*  alt={video.title}*/}
                {/*  fill*/}
                {/*  className="object-cover"*/}
                {/*/>*/}
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
