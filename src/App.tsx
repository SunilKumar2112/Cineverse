import { Grid, GridItem, HStack } from "@chakra-ui/react";

import { useState } from "react";
import ContentGenresList from "./components/ContentGenresList";
import ContentGrid from "./components/ContentGrid";
import ContentHeading from "./components/ContentHeading";
import ContentSorting, { SortProps } from "./components/ContentSorting";
import Navbar from "./components/Navbar";
import { genre } from "./hooks/UseGenre";

export interface ContentQuery {
  Genre: genre | null;
  Type: String;
  sort: SortProps;
  Search:string
}

function App() {
  const [ContentQuery, setContentQuery] = useState<ContentQuery>(
    {} as ContentQuery
  );
console.log(ContentQuery.Search);

  return (
    <>
      <Grid
        templateAreas={`"nav nav""main main"`}
        templateColumns={{
          base: `1fr`,
          lg: "200px 1fr",
        }}
      >
        <GridItem
          area="nav"
          bgColor="transparent"
          borderRadius="50px"
          border="1px solid white"
          boxShadow="1px 4px 4px 5px rgba(0, 0, 0, 0.25)"
        >
          <Navbar ContentType={(data) => setContentQuery({...ContentQuery,Type:data})} onSearch={(data) => setContentQuery({...ContentQuery,Search:data})} />
        </GridItem>

        <GridItem area="main" pt={10}>
        <ContentHeading contentQuery={ContentQuery}/>
        
          <HStack pl={3} display={ContentQuery.Search?'none' :'Flex'}>
            <ContentGenresList
              onSelectedGenre={(data) => setContentQuery({...ContentQuery,Genre:data})}
              selectedType={ContentQuery.Type}
            ></ContentGenresList>
            <ContentSorting
              selectedSort={(Sort: any) => setContentQuery({...ContentQuery,sort:Sort})}
            />
          </HStack>
          <ContentGrid
           ContentQuery={ContentQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
