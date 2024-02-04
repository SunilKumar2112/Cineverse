import { ChevronDownIcon } from "@chakra-ui/icons";
import UseGenre, { genre } from "../hooks/UseGenre";
import { Button, Menu,MenuButton, MenuList, List, ListItem, Spinner, Text, Select } from "@chakra-ui/react";
import { useEffect } from "react";

interface props{
  onSelectedGenre:(genre:any)=> void
  selectedType:any
}

const ContentGenresList = ({onSelectedGenre,selectedType}:props) => {
  const { data, error, isLoading } = UseGenre(selectedType);
  
  
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Select placeholder='Select genre' icon={<ChevronDownIcon />} onChange={(e) => onSelectedGenre(e.target.value)} width='200px'>
    {data.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))}
  </Select>
  );
};

export default ContentGenresList;