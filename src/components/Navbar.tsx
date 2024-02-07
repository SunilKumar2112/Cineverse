import { HStack, Image, Text, Box } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";
import SearchInput from "./SearchInput";
import ContentQueryStore from "../store/ContentQuery";




const Navbar = () => {
  const{ SetType }=ContentQueryStore()
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput  />
      <Box pr={20}>
        <HStack whiteSpace={'nowrap'}>
          <Text onClick={() => SetType("movie")}>Movies</Text>
          <Text onClick={() => SetType("tv")} >Tv Shows</Text>
          <ColorModeSwitch></ColorModeSwitch>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Navbar;
