import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";
import UseData, { FetchResponse } from "./UseData";
import { ProviderData } from "../components/PlatformIconList";
import { useQuery } from "@tanstack/react-query";

export interface FlatRate {
  provider_name: string;
  logo_path: string;
}

export interface provider {
  provider_name: string;
  IN: string[];
  rent: string[];
  flatrate: FlatRate[];
}
interface props {
  id: number;
}



interface FetchMovieReader {
  results: ProviderData;
}
const Providers = (url: string) => {

 

  const{data}=useQuery({
      queryKey:[`${url}`],
      queryFn:()=>apiClients.get<FetchResponse<ProviderData>>(`${url}`).then(res=>res.data.results)
      
    })
    const provider= data?data:[]
    console.log(provider);
    

  return { provider };
};

export default Providers;
//without react-query
  // const {
  //   data,
  //   error,
  //   isLoading,
  // } = UseData<ProviderData>(url, "results");

//another method
// const Providers = (id: number) => {
//   const [provider, getProvider] = useState<provider[]>([]);

//   useEffect(() => {
//     apiClients
//       .get<FetchMovieReader>(`/movie/${id}/watch/providers`)
//       .then((i) => {
//         getProvider(i.data.results);

//       })
//       .catch((err) => console.log(err.message));
//   }, []);

//   return { provider };
// };
