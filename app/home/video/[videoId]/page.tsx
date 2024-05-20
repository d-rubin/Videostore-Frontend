import { getSingleVideoUrl } from "@/lib/helper";
import { ResolutionSelect } from "@/components/ResolutionSelect";
import { TResolution } from "@/lib/actions";

export default async function VideoPage({
  params,
  searchParams,
}: {
  params: { videoId: string };
  searchParams?: { resolution?: TResolution };
}) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-end">
        <ResolutionSelect className="mr-2" />
        <video controls autoPlay className="">
          <source
            src={getSingleVideoUrl(params.videoId, searchParams?.resolution)}
            type="application/x-mpegURL"
          />
        </video>
      </div>
    </div>
  );
}
