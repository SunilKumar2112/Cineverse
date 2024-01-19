import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";


export interface FlatRate {
  provider_name: string;
  logo_path:string
}

export interface provider {
  provider_name: string;
  IN: string[];
  rent: string[];
  
}
interface props {
  id: number;
}
interface FetchMovieReader {
  results: provider[];
}
const Providers = (id: number) => {
  const [provider, getProvider] = useState<provider[]>([]);
  const [providerNames, setProviderNames] = useState<provider[]>([]);


  useEffect(() => {
    apiClients
      .get<FetchMovieReader>(`/movie/${id}/watch/providers`)
      .then((i) => {
        getProvider(i.data.results.IN.flatrate);
      
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
     // Replace this with the actual name of the "in" object
    const providerNameList = provider.map(item => item.provider_name);
    console.log(providerNameList);
   }, []);
 
   console.log(provider)




  return { provider };
};

export default Providers;



