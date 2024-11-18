"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function NewsCard({ news }) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{news.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={
              `http://image.tmdb.org/t/p/w500${news.backdrop_path}` ||
              `https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
            }
            alt={news.poster_path}
            width={500}
            height={300}
          />
          <CardDescription>
            <b>Overview:</b> {news.overview.slice(0, 150)}
          </CardDescription>
          <CardDescription>
            <b>Total Vote:</b> {news.vote_count}
          </CardDescription>
          <CardDescription>
            <b>Release_date:</b> {news.release_date}
          </CardDescription>
          <CardDescription>
            <b>Adult:</b> {news.adult !== "false" ? "Not" : "YES"}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="destructive">
            <Link href={`/news/${news.id}`}>Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
