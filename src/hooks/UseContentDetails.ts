import { useQuery } from "@tanstack/react-query";
import AppClient from "../Services/api-clients";
import { Content } from "../entities/Content";

const UseContentDetails = (
  Type: String | undefined,
  id: string | undefined
) => {
  const apiClients = new AppClient<Content>(`${Type}/${id}`);

  return useQuery({
    queryKey: [Type, id],
    queryFn: () => apiClients.getDetails(),
  });
};
export default UseContentDetails;
