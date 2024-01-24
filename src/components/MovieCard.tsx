
import  { Movie } from "../hooks/useMovie";
import { Card, Image, CardBody, Heading,Text, Flex,HStack} from "@chakra-ui/react";
import Providers from "../hooks/Providers";
import PlatformIconList from "./PlatformIconList";
import Rating from "./Rating1";


interface props {
  movie: Movie;
}


const MovieCard = ({ movie }: props) => {
  const {provider}=Providers(movie.id)
  const voteAverage =Math.round(movie.vote_average * 100) / 100;
  

 

  return (
    <Card 
   
 overflow="hidden" 
 
 borderRadius={10}
     >
        <Image maxWidth='100%'
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          objectFit="cover"
         

        />
     
        <CardBody >
          <Flex direction="column" >
          <HStack justifyContent="space-between"   >
            <Heading fontSize="2xl" fontWeight="bold" color="black" noOfLines={2}>
              {movie.title}
            </Heading>
          <Rating rate={movie.vote_average} />
        </HStack>
            <Text mb={4} color="gray.500" paddingTop="10px" margin={0}paddingBottom={0}>
              {movie.release_date}
            </Text>  
            <Text mb={4} color="gray.500" padding={0} margin={0}>
             <i>Streaming ON</i> 
            </Text>  
         
        <PlatformIconList platforms={provider}></PlatformIconList>
          </Flex>
        </CardBody>
        
      
    </Card>
  );
};

export default MovieCard;
