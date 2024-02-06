import { useState } from "react";
import UseData, { FetchResponse } from "./UseData";

import apiClients from "../Services/api-clients";
import { useQuery } from "@tanstack/react-query";
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

  return useQuery({
    queryKey: [`genre/${selectedType}/list`, selectedType],
    queryFn: () =>
      apiClients
        .get<data<genre>>(`/genre/${selectedType}/list`)
        .then((res) => res.data),
  });
};

export default UseGenre;

// UseData<genre>(`genre/${selectedType}/list`,'genres', {}, [
//   selectedType,
// ]);
