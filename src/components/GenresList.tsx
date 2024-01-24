import React from "react";
import UseGenre, { genre } from "../hooks/usegenre";
import { List, ListItem, Text } from "@chakra-ui/react";
import UseData from "../hooks/UseData";

const GenresList = () => {
  const { data, error } = UseGenre();

  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} paddingY={1.5}>
          <Text fontSize='lg'>{item.name}</Text></ListItem>
      ))}
    </List>
  );
};

export default GenresList;
