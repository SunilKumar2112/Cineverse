import { Box, Heading, Text } from "@chakra-ui/react";
import { ContentQuery } from "../App";
interface props {
  contentQuery: ContentQuery;
}
const ContentHeading = ({ contentQuery }: props) => {
  const heading = contentQuery.Search
    ? `Search results of  ${contentQuery.Search}`
    : `Explore ${contentQuery.Type == "movie" ? "Movies" : "Tv Shows"}`;
  return (
    <Box pb={4} ml={3}>
      <Heading as={"h1"} fontSize={'5xl'}>{heading}</Heading>
    </Box>
  );
};

export default ContentHeading;
