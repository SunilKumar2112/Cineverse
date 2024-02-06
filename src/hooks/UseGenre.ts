

import { useQuery } from "@tanstack/react-query";
import apiClients from "../Services/api-clients";
import AppClient from "../Services/api-clients";
export interface genre {
  id: any;
  name: string;
}
interface data<t> {
  genres: t[];
}
interface props {
  selectedType: string;
}
const UseGenre = (selectedType: any) => {
  if (selectedType == null) {
    selectedType = "movie";
  }
  const apiClients=new AppClient<genre>(`genre/${selectedType}/list`)

  return useQuery({
    queryKey: [`genre/${selectedType}/list`, selectedType],
    queryFn: () =>
      apiClients.getallData()
  });

};

export default UseGenre;

// UseData<genre>(`genre/${selectedType}/list`,'genres', {}, [
//   selectedType,
// ]);

// useQuery({
//   queryKey: [`genre/${selectedType}/list`, selectedType],
//   queryFn: () =>
//     apiClients
//       .get<data<genre>>(`/genre/${selectedType}/list`)
//       .then((res) => res.data),
// });
