import { Grid, GridItem, HStack } from '@chakra-ui/react';
import React from 'react'
import ContentQueryStore from '../store/ContentQuery';
import ContentGenresList from './ContentGenresList';
import ContentGrid from './ContentGrid';
import ContentHeading from './ContentHeading';
import ContentSorting from './ContentSorting';
import { useParams } from 'react-router-dom';
import ContentWrapper from './contentWrapper/ContentWrapper';

const SearchResult = () => {
  const{query}=useParams()
  console.log(query);
  
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
        <ContentHeading  search={query} />
      </GridItem>
      <GridItem area="genres" display={ContentQuery.Search ? "none" : "Flex"}>
        <HStack spacing={4}>
          <ContentGenresList />
          <ContentSorting />
        </HStack>
      </GridItem>
      <GridItem area="grid">
        <ContentGrid url={`/search/multi?query=${query}`} />
      </GridItem>
      
    </Grid>
    </ContentWrapper>
  )
}

export default SearchResult