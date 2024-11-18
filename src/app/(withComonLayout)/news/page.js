import NewsCard from "@/components/shared/NewsCard";

export default async function News() {
  const api =
    "https://api.themoviedb.org/3/movie/popular?api_key=4fbde326a784030d0a948a46706dec39";
  // const api =
  //   "https://newsapi.org/v2/everything?q=usa&apiKey=c8fb1fad15b2481caaf9610e916c9211";

  const data = await fetch(api, {
    cache: "no-store",
  });
  const allnews = await data.json();
  return (
    <div>
      <h1 className="text-4xl text-center">All Movie News</h1>
      <div className="grid grid-cols-3 gap-4 py-10">
        {allnews.results
          .map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
          .slice(0, 12)}
      </div>
    </div>
  );
}
