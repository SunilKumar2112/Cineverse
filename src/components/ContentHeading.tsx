import { Box, Heading, Text } from "@chakra-ui/react";

import ContentQueryStore from "../store/ContentQuery";

const ContentHeading = () => {
  const { ContentQuery: contentQuery } = ContentQueryStore();
  const heading = contentQuery.Search
    ? `Search results of  ${contentQuery.Search}`
    : `Explore ${contentQuery.Type == "tv" ? "Tv Shows" : "Movies"}`;
  return (
    <Box pb={4} ml={3}>
      <Heading as={"h1"} fontSize={"5xl"}>
        {heading}
      </Heading>
    </Box>
  );
};

export default ContentHeading;
