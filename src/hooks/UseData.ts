import { useEffect, useState } from "react";
import apiClients, { FetchResponse } from "../Services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";



const UseData = <T >(
  endpoint: string,
  results?:  "genres" | "results",
  requestConfig?: AxiosRequestConfig,
  deps?: any
) => {
  const [data, setDate] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClients
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig
      })
      .then((res) => {
        setDate(res.data[results as keyof FetchResponse<T>]);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps?[...deps]:[]);
  return { data, error, isLoading };
};

export default UseData;
// 'genre/movie/list'
