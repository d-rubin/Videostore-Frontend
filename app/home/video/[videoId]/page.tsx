import { getAllVideos } from "@/lib/actions";
import VideoPreview from "@/components/VideoPreview";

import { TVideo } from "@/lib/helper";

export default async function VideoPage({
  params,
}: {
  params: { videoId: string };
}) {
  const { data } = await getAllVideos();
  const video = data.find((video: TVideo) => video.title === params.videoId);

  return (
    <main className="h-full w-full overflow-hidden object-cover">
      <VideoPreview videoData={video} />
    </main>
  );
}
