import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";
import UseData from "./UseData";
import { ProviderData } from "../components/PlatformIconList";

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
  const {
    data: provider,
    error,
    isLoading,
  } = UseData<ProviderData>(url, "results");

  return { provider };
};

export default Providers;

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
