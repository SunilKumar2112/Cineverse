import { Box, Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";
import altimage from "../../assets/no-image-placeholder.webp";
import { Content } from "../../entities/Content";
import Providers from "../../hooks/UsProviders";
import CircluarRating from "../circleRating/CircluarRating";
import Img from "../Lazyloadimage/Img";
import './styles.scss'
export interface props {
  content: Content;
  mediaType: any;
}

const ContentCard = ({ content, mediaType }: props) => {
  if (mediaType == null) {
    mediaType = "movie";
  }
  const { provider } = Providers(`/${mediaType}/${content.id}/watch/providers`);
  const voteAverage = Math.round(content.vote_average * 100) / 100;
  const releaseDate = content.release_date || content.first_air_date;
  const release_date_format = (Date: any) =>
    moment(Date).format("MMMM DD, YYYY");
  let url = "";
  if (content.poster_path) {
    url = `https://image.tmdb.org/t/p/original${content.poster_path}`;
  } else {
    url = altimage;
  }

  return (
    <Link to={`/${mediaType}/${content.id}`}>
      <Card
        className="carouselItem"
        overflow="hidden"
        variant={"unstyled"}
        bg={"transparent"}
      >
        <Box objectFit={"contain"} position={"relative"}>
          <Img
          className="PosterImg"
          
            src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
            
          />
          {content?.vote_average && (
            <CircluarRating rating={content?.vote_average} />
          )}
        </Box>
        <CardBody padding={1} marginTop={-3 - 4}>
          <Stack data-type="Stack" spacing={1}>
            <Text noOfLines={1} className="title">
              {content.title || content.name}
            </Text>
            <Text noOfLines={1} className="date">
              {moment(
                `${content.release_date || content.first_air_date}`
              ).format("MMM,DD YYYY")}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ContentCard;

{
  /* <Link to={`/${mediaType}/${content.id}`}>
      <Card overflow="hidden" borderRadius={5}>
        <Image maxWidth="100vh" src={imgUtils(content.poster_path)} />

        <CardBody>
          <HStack justifyContent="space-between">
            <Heading
              fontSize="xl"
              fontWeight="bold"
              color="black"
              noOfLines={2}
            >
              {content.title || content.name}
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

          <PlatformIconList platforms={provider}></PlatformIconList>
        </CardBody>
      </Card>
    </Link> */
}
