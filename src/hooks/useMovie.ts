import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";
import { CanceledError } from "axios";
import UseData from "./UseData";
import { genre } from "./usegenre";

export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}
interface FetchMovieReader {
  results: Movie[];
}

const useMovie = (selectedGenre: genre | null) =>
  UseData(
    "discover/movie",
    "results",
    { params: { include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
    with_origin_country:"IN",
    with_genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );

export default useMovie;

// {params: { include_adult: 'false',
//   include_video: 'false',
//   language: 'en-US',
//   page: '1',
//   sort_by: 'popularity.desc',
// with_origin_country=IN
//   with_genres: `${selectedGenre?.id}`
// }}

// const useMovie = () => {
//   const [movie, setMovie] = useState<Movie[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClients
//       .get<FetchMovieReader>(
//         "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=IN",
//         { signal: controller.signal }
//       )
//       .then((res) => {
//         setMovie(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);
//   return { movie, error, isLoading };
// };
// export default useMovie;
