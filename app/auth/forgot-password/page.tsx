import Link from "next/link";
import { FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 items-center justify-center py-12">
        <Card className="mx-auto max-w-md w-full">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 font-bold text-xl">
                <FileCheck2 className="h-6 w-6 text-primary" />
                <span>PermitTracker</span>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">
              Reset your password
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email address and we&apos;ll send you a link to reset
              your password
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full">Send Reset Link</Button>
            <div className="text-center text-sm">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-primary hover:underline">
                Back to login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
