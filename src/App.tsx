import { Grid, GridItem, Show } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import axios from "axios";
import MovieGrid from "./components/MovieGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { genre } from "./hooks/usegenre";






function App() {
const [selectedGenre,setSelectedGenre]=useState<genre|null>(null)


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
        <Show above="lg">
        <GridItem area="aside" >
          <GenresList onSelectedGenre={(item)=>setSelectedGenre(item)}/>
        </GridItem>
        </Show>
        <GridItem area="main" >
          
          <MovieGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
