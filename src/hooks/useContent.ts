import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";
import { CanceledError } from "axios";
import UseData from "./UseData";
import { genre } from "./UseGenre";
import { SortProps } from "../components/ContentSorting";
import { ContentQuery } from "../App";

export interface Content {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}
interface FetchMovieReader {
  results: Content[];
}

const useContent = (ContentQuery: ContentQuery) => {
  const params = ContentQuery.Search
    ? { query: ContentQuery?.Search }
    : {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
        sort_by: ContentQuery.sort || "popularity.desc",
        with_origin_country: "IN",

        with_genres: ContentQuery.Genre,
      };

  return UseData(
    ContentQuery.Search
      ? `search/${ContentQuery.Type||'movie'}`
      : `discover/${ContentQuery.Type || "movie"}`,
    "results",
    {
      params,
    },
    [ContentQuery]
  );
};
export default useContent;

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
