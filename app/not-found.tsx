import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-20 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <Compass className="h-10 w-10" />
      </span>
      <h1 className="mt-6 font-display text-6xl font-extrabold text-grad">404</h1>
      <h2 className="mt-2 font-display text-2xl font-bold text-ink">Page Not Found</h2>
      <p className="mt-3 max-w-md text-ink-soft">
        The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you
        back to building a better tomorrow.
      </p>
      <Link href="/" className="mt-8">
        <Button size="lg">Back to Home</Button>
      </Link>
    </section>
  );
}
