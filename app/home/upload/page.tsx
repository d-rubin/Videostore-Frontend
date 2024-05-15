import { Input } from "@/components/ui/input";
import { uploadVideo } from "@/lib/actions";
import { Button } from "@/components/ui/button";

export default function UploadPage({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  return (
    <>
      <form
        className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col gap-2 px-4 md:max-w-[30rem]"
        action={uploadVideo}
      >
        <label htmlFor="upload">Upload a Video</label>
        <Input id="upload" name="file" type="file" accept="video/*" required />
        <label htmlFor="title">Enter a title</label>
        <Input id="title" type="text" name="title" />
        <label htmlFor="description">Enter a description</label>
        <Input id="description" type="text" name="description" />
        {searchParams?.error && (
          <p className="text-primary">{searchParams.error}</p>
        )}
        <Button type="submit" className="mt-2">
          Upload
        </Button>
      </form>
    </>
  );
}
