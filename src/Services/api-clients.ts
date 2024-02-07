import axios, { AxiosRequestConfig } from "axios";
import { genre } from "../hooks/UseGenre";
export interface FetchResponse<T> {
  results: T[];
  page: number;
  genres?: genre;
  total_pages?: number | null;
  pages:number
}
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTA4ZjQ0MWVkYjE4NGFmZGQyNDNjMjBhZDljMTY2NiIsInN1YiI6IjY1YTM4NTQ1NTY5MGI1MDEyOWIwNGYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NuAAqBZA5JgcEgPLESke_hJgyHw6yOMqmQip9nqo4SU",
  },
});
class AppClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getallData = (params?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T[]>>(this.endpoint, params)
      .then((res) => res.data);
  };
}
export default AppClient;
