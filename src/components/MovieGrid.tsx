import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovie from "../hooks/useMovie";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import apiClients from "../Services/api-clients";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieContainer from "./MovieContainer";

const MovieGrid = () => {
  const { data, error, isLoading } = useMovie();
  const skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) =><MovieContainer> <MovieCardSkeleton key={skeleton} /></MovieContainer>)}
         
        {data.map((item) => (
          <MovieContainer>
      <MovieCard key={item.id} movie={item} />
      </MovieContainer>

        ))}
       
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
