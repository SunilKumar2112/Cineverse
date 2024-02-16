import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { Box, Button, Text } from "@chakra-ui/react";
import useCredits from "../../../hooks/useCredits";
import Img from "../../../components/Lazyloadimage/Img";
import "./styles.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Content } from "../../../entities/Content";
import useContent from "../../../hooks/useContent";
import VideoPopup from "../../../components/VideoPopup/VideoPopup";
import { color } from "framer-motion";
const ContentBanner = () => {
  const { data, isFetching } = useCredits("/movie/upcoming");
  const ram = data?.results?.[Math.floor(Math.random() * 20)];
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { data: a } = useCredits(`/movie/${ram?.id}/videos`);

  const trailer = a?.results[0];

  const navigate = useNavigate();
  const watchTrailer = () => {
    if (!trailer) return;
    setShow(true);
    setVideoId(trailer.key);
  };

  const moreinfo = () => {
    navigate(`/movie/${ram.id}`);
  };
  return (
    <Box className="heroBanner">
      {!isFetching && (
        <>
          <Box opacity={0.3} className="backdrop-img">
          <Img
              src={`https://image.tmdb.org/t/p/original/${ram.backdrop_path}`}
              className={""}
            ></Img>
            
          </Box>
          <ContentWrapper>
            <Box
              width="40%"
              justifyItems={"flex-end"}
              display={"flex"}
              flexDirection={"column"}
              zIndex={10}
             color={'white'}
            >
              <Text as="b" fontSize="30px" paddingBottom={{ base: "10px" }}>
                {ram.title}
              </Text>
              <Text fontSize={{ base: "15px" }} noOfLines={{ base: 2, lg: 4 }}>
                {ram.overview}
              </Text>
              <Box
                display="flex"
                justifyContent={{ base: "space-between", md: "flex-start" }}
                gap={2}
                paddingTop={2}
              >
                <Button _hover={{color:' #da2f68'}} onClick={watchTrailer}>Play Trailer</Button>
                <Button _hover={{color:' #da2f68'}} onClick={moreinfo}>More info</Button>
              </Box>
            </Box>
            <VideoPopup
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
            />
          </ContentWrapper>
        </>
      )}
      <div className="opacity-layer"></div>
    </Box>
  );
};

export default ContentBanner;
