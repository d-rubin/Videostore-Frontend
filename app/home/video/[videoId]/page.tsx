import { getAllVideos } from "@/lib/actions";
import VideoPreview from "@/components/VideoPreview";

import { getSingleVideoUrl, TVideo } from "@/lib/helper";
import VideoPlayer from "@/components/VideoPlayer";

export default async function VideoPage({
  params,
}: {
  params: { videoId: string };
}) {
  const { data } = await getAllVideos();
  const video = data.find((video: TVideo) => video.title === params.videoId);

  return (
    <main className="h-full w-full overflow-hidden object-cover">
      {/*<VideoPlayer src={video} />*/}
      <video width="352" height="198" controls>
        <source
          src={getSingleVideoUrl(params.videoId)}
          type="application/x-mpegURL"
        />
      </video>
    </main>
  );
}
