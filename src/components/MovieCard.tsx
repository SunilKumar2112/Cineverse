import React, { useState } from "react";
import useMovie, { Movie } from "../hooks/useMovie";
import { Card, Image, CardBody, Heading,Text, Flex,Box } from "@chakra-ui/react";
import apiClients from "../Services/api-clients";
import Providers from "../hooks/Providers";
import { color } from "framer-motion";
import PlatformIconList from "./PlatformIconList";

interface props {
  movie: Movie;
}


const MovieCard = ({ movie }: props) => {
  const {provider}=Providers(movie.id)
  const voteAverage =Math.round(movie.vote_average * 100) / 100;
  
  {console.log(movie.title,movie.id)}
 

  return (
    <Card borderRadius={10}
    
        
     overflow="hidden" justifyContent='flex-start' >
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
         

        />
      <CardBody>
      <Flex direction="column" alignItems="flex-start">
     
            <Heading fontSize="2xl" fontWeight="bold" color="black" noOfLines={2}>
              {movie.title}
            </Heading>
     
        <Text mb={4 }color="gray.500" padding-top='10px'> {movie.release_date}</Text>
        {provider==null&&<Text>not yet</Text>}
        <PlatformIconList platforms={provider}></PlatformIconList>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
