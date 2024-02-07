import { Grid, GridItem, HStack } from "@chakra-ui/react";

import ContentGenresList from "./components/ContentGenresList";
import ContentGrid from "./components/ContentGrid";
import ContentHeading from "./components/ContentHeading";
import ContentSorting from "./components/ContentSorting";
import Navbar from "./components/Navbar";
import { genre } from "./hooks/UseGenre";
import ContentQueryStore from "./store/ContentQuery";

// export interface ContentQuery {
//   Genre: genre | null;
//   Type: String;
//   sort: SortProps;
//   Search: string;
// }

function App() {
  // const [ContentQuery, setContentQuery] = useState<ContentQuery>(
  //   {} as ContentQuery
  // );
 const{ContentQuery}=ContentQueryStore();

 
 


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
          <Navbar
          
          />
        </GridItem>

        <GridItem area="main" pt={10}>
          <ContentHeading  />

          <HStack pl={3} display={ContentQuery.Search ? "none" : "Flex"}>
            <ContentGenresList
            
            ></ContentGenresList>
            <ContentSorting
            />
          </HStack>
          <ContentGrid  />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
