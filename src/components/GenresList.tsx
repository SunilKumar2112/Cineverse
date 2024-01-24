import React from "react";
import UseGenre, { genre } from "../hooks/usegenre";
import { List, ListItem, Spinner, Text } from "@chakra-ui/react";
import UseData from "../hooks/UseData";

const GenresList = () => {
  const { data, error, isLoading } = UseGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} paddingY={1.5}>
          <Text fontSize="lg">{item.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
