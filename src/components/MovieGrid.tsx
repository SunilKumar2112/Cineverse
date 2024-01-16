import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovie from "../hooks/useMovie";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const { movie, error } = useMovie();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={10} padding={10}>
        {movie.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
