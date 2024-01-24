
import { useEffect, useState } from 'react'
import apiClients from '../Services/api-clients';
import { CanceledError } from 'axios';

  interface FetchResponse <T>{
    results: T[];
  }

const UseData =<T>  (endpoint:string,store:any) => {
    const [data, setdata] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClients
        .get<FetchResponse<T>>(
            endpoint,
          { signal: controller.signal }
        )
        .then((res) => {
          setdata(res.data[store]);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
     
      return () => controller.abort();
    }, []); 
    return {data,error,isLoading }
}

export default UseData
// 'genre/movie/list'