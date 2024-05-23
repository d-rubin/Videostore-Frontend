import { getSingleVideoUrl } from "@/lib/helper";
import { ResolutionSelect } from "@/components/ResolutionSelect";
import { TResolution } from "@/lib/actions";
import VideoPlayer from "@/components/VideoPlayer";

export default async function VideoPage({
  params,
  searchParams,
}: {
  params: { videoId: string };
  searchParams?: { resolution?: TResolution };
}) {
  return (
    <div className="mx-auto max-h-dvh max-w-screen-2xl">
      <VideoPlayer
        src={getSingleVideoUrl(params.videoId, searchParams?.resolution)}
      />
    </div>
  );
}
