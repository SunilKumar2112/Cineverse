import { Grid, GridItem } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import axios from "axios";
import MovieGrid from "./components/MovieGrid";
import GenresList from "./components/GenresList";






function App() {

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main"`, 
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: `1fr`,
          lg:'200px 1fr'
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem area="aside" bg="">
          <GenresList />
        </GridItem>
        <GridItem area="main" bg="">
          Main
          <MovieGrid></MovieGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
