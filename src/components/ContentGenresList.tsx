import { ChevronDownIcon } from "@chakra-ui/icons";
import { Select, Spinner } from "@chakra-ui/react";
import UseGenre from "../hooks/UseGenre";
import { genre } from "../entities/genre";
import ContentQueryStore from "../store/ContentQuery";

const ContentGenresList = () => {
  const { ContentQuery, setGenre } = ContentQueryStore();
  const { data, error, isLoading } = UseGenre(ContentQuery.Type);

  if (error) return null;
  if (isLoading) return <Spinner />;
  if (!data || !data.genres) return null;


  return (
    <Select
      placeholder="Select genre"
      icon={<ChevronDownIcon />}
      onChange={(e) => setGenre(e.target.value)}
      width="200px"
    >
      {data?.genres.map((item: genre) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};

export default ContentGenresList;
