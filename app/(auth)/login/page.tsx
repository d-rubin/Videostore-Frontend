import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <Card className="w-full self-center sm:w-fit">
      <CardHeader>
        <CardTitle>
          <h1 className="text-center text-3xl">Sign In</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input name="username" placeholder="Username" />
        <Input name="password" placeholder="Password" />
      </CardContent>
    </Card>
  );
}
