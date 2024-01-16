import React from "react";
import { Movie } from "../hooks/useMovie";
import { Card, Image, CardBody, Heading } from "@chakra-ui/react";
interface props {
  movie: Movie;
}
const MovieCard = ({ movie }: props) => {
 
 

  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }
        
        
      ></Image>
      
      <CardBody>
      
        <Heading fontSize='2xl'>
          {movie.original_title}
          
          
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
