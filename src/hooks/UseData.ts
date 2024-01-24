import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  results: T[];
}

const UseData = <T>(
  endpoint: string,
  results: any,
  requestConfig?: AxiosRequestConfig,
  deps?: any
) => {
  const [data, setdata] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  console.log(requestConfig);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClients
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig
      })
      .then((res) => {
        setdata(res.data[results]);
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
