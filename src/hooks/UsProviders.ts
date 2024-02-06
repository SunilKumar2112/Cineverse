import { useQuery } from "@tanstack/react-query";
import apiClients, { FetchResponse } from "../Services/api-clients";
import { ProviderData } from "../components/PlatformIconList";
import { } from "./UseData";
import AppClient from "../Services/api-clients";

export interface FlatRate {
  provider_name: string;
  logo_path: string;
}


interface props {
  id: number;
}



interface FetchMovieReader {
  results: ProviderData;
}
const Providers = (url: string) => {

  const apiClients=new AppClient<ProviderData>(url); 

  const{data}=useQuery({
      queryKey:[`${url}`],
      queryFn:()=>apiClients.getallData()
      
    })

    
    const provider= data?data.results:[]
   
    

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
