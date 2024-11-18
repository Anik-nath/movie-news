import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";

export default async function Home() {
  const api =
    "https://api.themoviedb.org/3/movie/popular?api_key=4fbde326a784030d0a948a46706dec39";
  const data = await fetch(api, {
    cache: "force-cache",
  });
  const allnews = await data.json();
  return (
    <div>
      <main>
        <Banner />
        <h1 className="text-4xl text-center">Top 3 Movies</h1>
        <div className="grid grid-cols-3 gap-4 py-10">
          {allnews.results
            .map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
            .slice(0, 3)}
        </div>
      </main>
    </div>
  );
}
