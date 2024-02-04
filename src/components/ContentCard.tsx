import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import Providers, { provider } from "../hooks/Providers";
import { Content } from "../hooks/useContent";
import PlatformIconList, { ProviderData } from "./PlatformIconList";
import Rating from "./Rating1";
import moment from "moment";
import altimage from '../assets/no-image-placeholder.webp'

export interface props {
  content: Content;
  mediaType:any;
  
}

const ContentCard = ({ content,mediaType }: props) => {
  if(mediaType==null){
    mediaType='movie'
  }
  const { provider } = Providers(`/${mediaType}/${content.id}/watch/providers`) ;
  const voteAverage = Math.round(content.vote_average * 100) / 100;
  const  releaseDate = content.release_date|| content.first_air_date
  const release_date_format=(Date:any)=>moment(Date).format('MMMM DD, YYYY');
  let url=''
  if(content.poster_path){
     url=  `https://image.tmdb.org/t/p/original${content.poster_path }`
    

  }
  else{
    url=altimage
  }



  return (
    <Card overflow="hidden" borderRadius={5}>

      <Image
      
        maxWidth="100vh"
        src={url}
        
      />
    
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading fontSize="xl" fontWeight="bold" color="black" noOfLines={2}>
            {content.title||content.name}
          </Heading>
          <Rating rate={voteAverage} />
        </HStack>
        <Text
          mb={4}
          color="gray.500"
          paddingTop="10px"
          margin={0}
          paddingBottom={0}
        >
          {release_date_format(releaseDate)}
        </Text>
        <Text mb={4} color="gray.500" padding={0} margin={0}>
          <i>Streaming ON</i>
        </Text>

        {/* <PlatformIconList platforms={provider}></PlatformIconList> */}
      </CardBody>
    </Card>
  );
};

export default ContentCard;
