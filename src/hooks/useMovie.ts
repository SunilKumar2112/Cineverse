import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";
import { CanceledError } from "axios";
interface Movie {
  id: number;
  original_title: string;
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
        "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
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
