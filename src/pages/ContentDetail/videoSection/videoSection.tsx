import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import {
  Box,
  Flex,
  HStack,
  Stack,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { Content } from "../../../entities/Content";
import Img from "../../../components/Lazyloadimage/Img";
import { redirect } from "react-router-dom";
import "./Styles.scss";
import imgUtils from "../../../Services/imgUtils";
import VideoPopup from "../../../components/VideoPopup/VideoPopup";
import { PlayBtn } from "../../../components/videosection/PlayBtn";
interface props {
  videos: {
    id: number;
    results: { id: number; key: number; name: string }[];
  };
  loading: boolean;
}

const VideoSection = ({ videos: data, loading }: props) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  console.log(videoId);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
      </ContentWrapper>
      <ContentWrapper>
        {!loading ? (
          <div className="videos">
            <Stack direction="row" overflow="auto">
              {data?.results?.map((video) => (
                <div
                  key={video.id}
                  className="videoItem"
                  onClick={() => {
                    setVideoId(video.key.toString());
                    setShow(true);
                  }}
                >
                  <div className="videoThumbnail">
                    <Img
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                      className="IMMmg"
                    />
                    <Box height={2} marginBottom={-3}>
                      <PlayBtn />
                    </Box>
                  </div>

                  <div className="videoTitle">{video.name}</div>
                </div>
              ))}
            </Stack>
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideoSection;
