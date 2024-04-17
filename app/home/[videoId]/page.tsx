import { getSingleVideo } from "@/lib/actions";

export default async function VideoPage({
  params,
}: {
  params: { videoId: string };
}) {
  const { data: video } = await getSingleVideo(params.videoId);
  return (
    <>
      <div>Video Page</div>
      <p>{video.title}</p>
    </>
  );
}
