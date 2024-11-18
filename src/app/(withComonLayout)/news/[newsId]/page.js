
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import Image from "next/image";
import React, { Suspense } from "react";

export const generateStaticParams = async () => {
  const api =
    "https://api.themoviedb.org/3/movie/popular?api_key=4fbde326a784030d0a948a46706dec39";
  const data = await fetch(api, {
    cache: "force-cache",
  });
  const result = await data.json();
  return result.results.slice(0, 3).map((item) => ({
    newsId: item.id.toString(),
  }));
};

export default async function NewsDetails({ params, searchParams }) {
  const newsId = params.newsId;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${newsId}?api_key=4fbde326a784030d0a948a46706dec39`,
    {
      cache: "no-store",
    }
  );
  const result = await data.json();

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-x-8">
        <div className="w-full h-[400px] relative my-4">
          <Image
            src={`http://image.tmdb.org/t/p/w500${result.poster_path}`}
            alt="movie details cover"
            width={500}
            height={300}
          ></Image>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl uppercase">
            {result.title} {searchParams.name}
          </h1>
          <p className="text-xl py-4">Overview: {result.overview}</p>
          <p className="text-xl">Total Vote: {result.vote_count}</p>
          <p className="text-xl py-4">Realese Date: {result.release_date}</p>
          <p className="text-xl">
            Adult: {result.adult !== "false" ? "Not" : "YES"}
          </p>
        </div>
      </div>
    </Suspense>
  );
}
