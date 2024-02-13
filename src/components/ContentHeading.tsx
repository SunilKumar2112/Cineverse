import { Box, Heading, Text } from "@chakra-ui/react";

import ContentQueryStore from "../store/ContentQuery";
interface props{
  search?:string;
}

const ContentHeading = ({search}:props) => {
  const { ContentQuery: contentQuery } = ContentQueryStore();
  console.log('hi',contentQuery.Search);
  
  const heading = search!=undefined
    ? `Search results of  ${search}`
    : `Explore ${contentQuery.Type == "tv" ? "Tv Shows" : "Movies"}`;
  return (
    <Box pb={4} ml={3} flexWrap={"nowrap"}>
      <Heading as={"h1"} fontSize={"5xl"} >
        {heading}
      </Heading>
    </Box>
  );
};

export default ContentHeading;
