import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
   
    <Grid
      templateAreas={{
        base: `"nav" " main""aside"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" >
        <Navbar />
      </GridItem>
      <GridItem area="aside" bg="red">
        Aside
      </GridItem>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
    </>
  );
}

export default App;
