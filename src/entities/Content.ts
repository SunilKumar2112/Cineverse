import { genre } from "./genre";

export interface Content {
  crew: any;
  //for movies
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: genre;
  results:any[]

  // for tv shows
  first_air_date: any;
  name: string;
  overview: string;
  original_title: string;
  status: string;
  tagline: string | null;
  created_by: {
    name: string;
  }[];
  cast: {
    character: string;
    original_name: string;
    profile_path: string;
  }[];
  videos: { id: number; results: {key:string, name:string}[] } | undefined;
}
