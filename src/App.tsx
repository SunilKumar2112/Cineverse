import { Grid, GridItem } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import axios from "axios";
import MovieGrid from "./components/MovieGrid";



function App() {
  
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main"`, 
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem area="aside" bg="">
          Aside
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
