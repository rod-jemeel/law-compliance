import { redirect } from "next/navigation";

export default function Page() {
  // Keep redirecting to the home page
  return redirect("/home");
}
