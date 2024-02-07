import { useInfiniteQuery } from "@tanstack/react-query";

import AppClient, { FetchResponse } from "../Services/api-clients";
import ContentQueryStore from "../store/ContentQuery";

export interface Content {
  //for movies
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  // for tv shows
  first_air_date: any;
  name: string;
}
interface FetchMovieReader {
  results: Content[];
}

const useContent = () => {
  const{ContentQuery}=ContentQueryStore()
  const url = ContentQuery.Search
    ? `search/${ContentQuery.Type || "movie"}`
    : `discover/${ContentQuery.Type || "movie"}`;
  const apiClients = new AppClient<Content>(url);
  const params = ContentQuery.Search
    ? { query: ContentQuery?.Search }
    : {
        include_adult: "false",
        include_video: "false",
        language: "en-US",

        sort_by: ContentQuery.sort || "popularity.desc",
        with_origin_country: "IN",
        page: "1",
        with_genres: ContentQuery.Genre,
      };

  // const { data, error } =

  // const data = temp ? temp.data.results : [];

  return useInfiniteQuery<FetchResponse<Content>, Error>({
    queryKey: [url, ContentQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClients.getallData({ params: { ...params, page: pageParam } }),
    getNextPageParam: (lastPage, allpages) => {
      return lastPage.results.length > 0 ? allpages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};
export default useContent;

// without reactquery
// UseData(
//   ContentQuery.Search
//     ? `search/${ContentQuery.Type || "movie"}`
//     : `discover/${ContentQuery.Type || "movie"}`,
//   "results",
//   {
//     params,
//   },
//   [ContentQuery]
// );
// };
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
