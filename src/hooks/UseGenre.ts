import { useQuery } from "@tanstack/react-query";
import AppClient from "../Services/api-clients";
import { genre } from "../entities/genre";
interface data<t> {
  genres: t[];
}

const UseGenre = (selectedType: any) => {
  if (selectedType == null) {
    selectedType = "movie";
  }
  const apiClients = new AppClient<data<genre[]>>(`genre/${selectedType}/list`);

  return useQuery({
    queryKey: [`genre/${selectedType}/list`, selectedType],
    queryFn: () => apiClients.getallData(),
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
