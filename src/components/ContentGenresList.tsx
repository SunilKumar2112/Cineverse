import { ChevronDownIcon } from "@chakra-ui/icons";
import { Select, Spinner } from "@chakra-ui/react";
import UseGenre, { genre } from "../hooks/UseGenre";

interface props{
  onSelectedGenre:(genre:any)=> void
  selectedType:any
}

const ContentGenresList = ({onSelectedGenre,selectedType}:props) => {
  const { data, error, isLoading } = UseGenre(selectedType);
 
  

  
  if (error) return null;
  if (isLoading) return <Spinner />;
  if (!data || !data.genres) return null;

  return (
    <Select placeholder='Select genre' icon={<ChevronDownIcon />} onChange={(e) => onSelectedGenre(e.target.value)} width='200px'>
    {data?.genres.map((item:genre) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))}
  </Select>
  );
};

export default ContentGenresList;