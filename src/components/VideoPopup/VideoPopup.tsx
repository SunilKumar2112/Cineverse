import React from "react";

import ReactPlayer from "react-player/youtube";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Box, extendTheme, theme } from "@chakra-ui/react";
import "./styles.scss";
interface VideoPopupProps {
  show: boolean;
  setShow: any;
  videoId: string | null;
  setVideoId: any;
}
const VideoPopup = ({ show, setShow, videoId, setVideoId }:VideoPopupProps) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <Box className="videoPopup " display={show?'flex':'none'}>
      <Box className="opacityLayer" onClick={hidePopup}></Box>
      <Box className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>

        <ReactPlayer
          width="100%"
          height="100%"
          controls
          url={`https://www.youtube.com/watch?v=${videoId}`}
        />
      </Box>
    </Box>
  );
};

export default VideoPopup;
