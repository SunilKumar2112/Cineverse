import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";
import { CanceledError } from "axios";

export  interface Movie {
  id: number;
  title: string;
  backdrop_path:string
  poster_path:string
  release_date:string
  vote_average:number
}
interface FetchMovieReader {
  results: Movie[];
}

const useMovie = () => {
  const [movie, setMovie] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClients
      .get<FetchMovieReader>(
        "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=IN",
        { signal: controller.signal }
      )
      .then((res) => setMovie(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)});
    return () => controller.abort();
  }, []);
  return { movie, error };
};
export default useMovie
