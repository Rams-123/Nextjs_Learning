import CaroselBanner from "@/components/CaroselBanner";
import MovieContainer from "@/components/MovieContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getUpcomingMovies();
  const popularMovies = await getUpcomingMovies();
  // console.log(nowPlayingMovies);
  //console.log("Upcoming ..", upComingMovies);

  return (
    <main className="">
      <CaroselBanner />
      <div className="flex flex-col space-y-2">
        <MovieContainer
          movies={nowPlayingMovies}
          title="Now Playing"
          // isVertical={true}
        />
        <MovieContainer movies={upcomingMovies} title="Upcoming" />
        <MovieContainer movies={topRatedMovies} title="Top Rated" />
        <MovieContainer movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
