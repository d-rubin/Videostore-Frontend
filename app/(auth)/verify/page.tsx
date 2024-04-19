import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function VerifyPage({
  searchParams,
}: {
  searchParams?: { success?: "true" | "false" };
}) {
  const errorTitle = "Link expired!";
  const errorDescription =
    "The link you clicked has expired. Please request a new one.";
  const successTitle = "Verify successfull";
  const successDescription =
    "Your email has been verified. You can now sign in to your account.";

  const isVerified = searchParams?.success === "true";
  return (
    <Card className="flex w-full flex-col gap-8 px-8 py-10 opacity-90 sm:w-[25rem] sm:px-16">
      <>
        <h1 className="text-4xl font-semibold">Verfiy</h1>
        <Alert variant={isVerified ? "success" : "destructive"}>
          <AlertTitle>{isVerified ? successTitle : errorTitle}</AlertTitle>
          <AlertDescription>
            {isVerified ? successDescription : errorDescription}
          </AlertDescription>
        </Alert>
        <span className="flex w-fit flex-row gap-2">
          <p className="opacity-70">Go to the </p>
          <Link href="/login">Sign in</Link>
        </span>
      </>
    </Card>
  );
}
