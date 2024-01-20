import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovie from "../hooks/useMovie";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import apiClients from "../Services/api-clients";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const { movie, error, isLoading } = useMovie();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
        {movie.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
