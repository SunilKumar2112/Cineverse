import React from "react";
import UseGenre, { genre } from "../hooks/usegenre";
import { Button, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import UseData from "../hooks/UseData";
interface props{
  onSelectedGenre:(genre:any)=> void
}

const GenresList = ({onSelectedGenre}:props) => {
  const { data, error, isLoading } = UseGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} paddingY={1.5}>
          <Button onClick={()=>onSelectedGenre(item)}fontSize="lg" variant='link'>{item.name}</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
