import {
  Box,
  Wrap,
  WrapItem,
  Text,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Content } from "../../../entities/Content";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import imgUtils from "../../../Services/imgUtils";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./Cast.scss";
interface props {
  casts: casts[];
  loading: any;
}
interface casts {
  character: string;
  original_name: string;
  profile_path: string;
}

const Cast = ({ casts, loading }: props) => {
  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <>
    <ContentWrapper>
     <Text >Casts</Text>

     </ContentWrapper>
      <ContentWrapper>
        <Flex overflow={"auto"}>
          {casts.map((cast, index) => (
            <Box padding={4} key={index}>
              <Avatar
                size={{ base: "xl", md: "2xl" }}
                src={imgUtils(cast.profile_path)}
              />

              <Text className="name">{cast.original_name}</Text>
              <Text className="character">{cast.character}</Text>
            </Box>
          ))}
        </Flex>
      </ContentWrapper>
    </>
  );
};

export default Cast;
