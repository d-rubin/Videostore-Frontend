import { TResolution } from "@/lib/actions";

export function getSingleVideoUrl(
  title: string,
  resolution: TResolution = "360",
) {
  return `${process.env.API_URL}/videos/download/${title}_${resolution}/`;
}

export type TVideo = {
  title: string;
  description: string;
  thumbnail: string;
};
