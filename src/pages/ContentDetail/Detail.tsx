import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AppClient from "../../Services/api-clients";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import UseContentDetails from "../../hooks/UseContentDetails";
import DetailsBanner from "./DetailsBanner/DetailsBanner";
import useCredits from "../../hooks/useCredits";
import Navbar from "../../components/Navbar/Navbar";
import Cast from "./Cast/Cast";
import VideoSection from "./videoSection/videoSection";
import VideoPopup from "../../components/VideoPopup/VideoPopup";
import Similar from "./Carousels/Similar";
import Recommendation from "./Carousels/Recommendation";

const Detail = () => {
  const { Type, id } = useParams();

  const { data: credits, isLoading } = useCredits(`${Type}/${id}/credits`);
  const { data: videos, isLoading: Loading } = useCredits(
    `${Type}/${id}/videos`
  );
  // if(isLoading) return<Spinner></Spinner>
  // if(error||!data)  throw error

  // // console.log(data);
  if (!credits) return null;
  if (!Type) return null;
  if(!id) return null;
  if(!videos) return null;

  return (
    <div>
      <DetailsBanner crew={credits?.crew} video={videos} />

      <Cast casts={credits?.cast} loading={isLoading} />
      <VideoSection videos={videos} loading={Loading} />
      <Similar type={Type} id={id} />
      <Recommendation type={Type} id={id} />
    </div>
  );
};

export default Detail;
