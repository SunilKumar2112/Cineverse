import { Box } from "@chakra-ui/react";
import ContentBanner from "./ContentBanner/ContentBanner";
import Popular from "./popular/Popular";
import TopRated from "./topRated/topRated";
import Trending from "./trending/Trending";


const Homepage = () => {
  return (
    <div className="homePage">
  
    <ContentBanner/>
    <Box >
    <Trending/>
      <Popular />
     <TopRated/>
     </Box>
  
    </div>
  );
};

export default Homepage;
