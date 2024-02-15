import { Grid, GridItem, HStack } from "@chakra-ui/react";
import ContentGenresList from "../../components/ContentGenresList";
import ContentGrid from "../../components/ContentGrid";
import ContentHeading from "../../components/ContentHeading";
import ContentSorting from "../../components/ContentSorting";
import ContentQueryStore from "../../store/ContentQuery";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const ExploreContent = () => {
  const { ContentQuery, SetType } = ContentQueryStore();


  return (
    <ContentWrapper>
    <Grid
      templateAreas={{
        lg: `"heading heading"" genres" "grid grid"`,
        base: `"heading heading" "genres sorting" "grid grid"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      
      gap={4}
    >
      <GridItem area="heading" pt={10} >
        <ContentHeading />
      </GridItem>
      <GridItem area="genres" display={ContentQuery.Search ? "none" : "Flex"}>
        <HStack spacing={4} >
          <ContentGenresList />
          <ContentSorting />
        </HStack>
      </GridItem>
      <GridItem area="grid" >
        
        <ContentGrid url={`discover/${ContentQuery.Type || "movie"}`}/>
      
      </GridItem>
      
    </Grid>
    </ContentWrapper>
  );
};

export default ExploreContent;
