"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex justify-center items-center mx-auto text-center py-12 h-screen  bg-slate-200">
      <div>
        <h1 className="text-7xl">Latest World News</h1>
        <p className="py-6 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          quia.
        </p>
        <Button variant="destructive">
          <Link href="/about">Explore more</Link>
        </Button>
      </div>
    </div>
  );
}
