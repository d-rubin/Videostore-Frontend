import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <Card className="flex w-full flex-col gap-8 p-8 sm:w-fit">
      <h1 className="text-4xl">Sign In</h1>
      <div className="flex flex-col gap-4">
        <Input name="username" placeholder="Username" />
        <Input name="password" placeholder="Password" />
      </div>
    </Card>
  );
}
