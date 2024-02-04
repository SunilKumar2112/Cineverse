import { HStack, Image, Text, Box } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { useState } from "react";
import SearchInput from "./SearchInput";
interface props {
  ContentType: (type: any) => void;
  onSearch:(searchText:string)=>void

}


const Navbar = ({ ContentType,onSearch }: props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <Box pr={20}>
        <HStack whiteSpace={'nowrap'}>
          <Text onClick={() => ContentType("movie")}>Movies</Text>
          <Text onClick={() => ContentType("tv")} >Tv Shows</Text>
          <ColorModeSwitch></ColorModeSwitch>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Navbar;
