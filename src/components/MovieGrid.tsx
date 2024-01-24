import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovie from "../hooks/useMovie";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import apiClients from "../Services/api-clients";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieContainer from "./MovieContainer";
import { genre } from "../hooks/usegenre";
interface props{
  selectedGenre:genre|null
}

const MovieGrid = ({selectedGenre}:props) => {
  const { data, error, isLoading } = useMovie(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieContainer key={skeleton}>
              <MovieCardSkeleton  />
            </MovieContainer>
          ))}

        {data.map((item) => (
          <MovieContainer key={item.id}>
            <MovieCard  movie={item} />
          </MovieContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
