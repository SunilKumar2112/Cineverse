import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import { useParams } from "react-router-dom";
import imgUtils from "../../../Services/imgUtils";
import { PlayBtn } from "../../../components/videosection/PlayBtn";
import { genre } from "../../../entities/genre";
import useCredits from "../../../hooks/useCredits";
import CircluarRating from "../../../components/circleRating/CircluarRating";
import "./DetailsBanner.scss";
import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";


interface props {
  crew: Crew[];
  video: any;
}

interface Crew {
  job: string;
  name: string;
}

const DetailsBanner = ({ crew, video }: props) => {
  const { Type, id } = useParams();
  const url = `${Type}/${id}` || "";

  const director = crew.filter((res) => res.job == "Director") || undefined;

  const Writing = crew.filter(
    (res) =>
      res.job == "Story" || res.job == "Screenplay" || res.job == "Writer"
  );

  const { data, isLoading, error } = useCredits(url);

  const runtime = data?.runtime
    ? `${Math.floor(data?.runtime / 60)}h ${data?.runtime % 60}m `
    : "00";
  const createdby_length = data?.created_by?.length;

  return (
    <div className="detailsBanner">
      {!isLoading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <img src={imgUtils(data?.poster_path)} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <Box w="100%" className="content ">
                  <Box className="left">
                    <Image
                      src={imgUtils(data?.poster_path)}
                      className="posterImg"
                    />
                  </Box>
                  <Box className="right">
                    <Heading className="title">
                      {data?.title || data?.name}
                    </Heading>{" "}
                    <Text className="subtitle">{data?.tagline}</Text>
                    <Box className="Castcrew-genre">
                      {data?.genres.length > 0 &&
                        data?.genres.map((genre: genre) => (
                          <Box className="Castcrew-genre-value">
                            {genre.name}
                          </Box>
                        ))}
                    </Box>
                    <HStack className="row">
              
                      {data?.vote_average && 
                        <CircluarRating rating={data?.vote_average} />
                      }
                      <Box display={"flex"} className="PlayBtn" alignItems="center" >
                      <PlayBtn />
                    
                        <Text
                          fontSize="md"
                          className="PlayTrailer"
                          color={"white"}
                          fontWeight="bold"
                          marginLeft="40px"
                          marginBottom={35}
                        >
                          Play Trailer
                        </Text>
                       
                      </Box>
                  
                    </HStack>
                    <Box className="overview">
                      <Text className="heading">Overview</Text>
                      <Text className="description">{data?.overview}</Text>

                      <Box className="info ">
                        {data?.status && (
                          <Box className="infoItem">
                            <Text className={"text bold"} as={"span"}>
                              Status:
                            </Text>

                            <Text className={"text"}>{data?.status}</Text>
                          </Box>
                        )}
                        {data?.release_date && (
                          <Box className="infoItem">
                            <Text className={"text bold"} as={"span"}>
                              Release Date:
                            </Text>

                            <Text className={"text"}>
                              {moment(data?.release_date).format(
                                "MMM DD, YYYY"
                              )}
                            </Text>
                          </Box>
                        )}
                        {data?.runtime && (
                          <Box className="infoItem">
                            <Text className={"text bold"} as={"span"}>
                              Runtime:
                            </Text>

                            <Text className={"text"}>{runtime}</Text>
                          </Box>
                        )}
                      </Box>
                      {director.length > 0 && (
                        <Box className="info">
                          <Text className={"text bold"} as={"span"}>
                            Director:
                          </Text>
                          <Text className="text">
                            {director?.map((d, i) => (
                              <Text key={i}>
                                {d.name}
                                {director.length - 1 !== i && ", "}
                              </Text>
                            ))}
                          </Text>
                        </Box>
                      )}

                      {Writing.length > 0 && (
                        <Box className="info ">
                          <Text className={"text bold"} as={"span"}>
                            Writing:
                          </Text>
                          <Text className="text">
                            {Writing?.map((d, i) => (
                              <Text key={i} as={"span"}>
                                {d.name}
                                {Writing.length - 1 !== i && ", "}
                              </Text>
                            ))}
                          </Text>
                        </Box>
                      )}
                      {data?.created_by?.length > 0 && (
                        <Box className="info">
                          <Text className="text bold" as={"span"}>
                            Creator:{" "}
                          </Text>
                          <Text className="text" as={"span"}>
                            {data?.created_by?.map((d, i) => (
                              <Text key={i}>
                                {d.name}
                                {data?.created_by.length - 1 !== i && ", "}
                              </Text>
                            ))}
                          </Text>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
