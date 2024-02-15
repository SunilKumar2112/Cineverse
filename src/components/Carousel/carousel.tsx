import React from "react";
import { Content } from "../../entities/Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Box, Card, CardBody, Stack, Image, Text } from "@chakra-ui/react";
import "./styles.scss";
import moment from "moment";
import CircluarRating from "../circleRating/CircluarRating";
import { Link } from "react-router-dom";
interface props {
  title: string;
  data: Content[] | undefined;
  loading: boolean;
  endpoint: string;
}
const Carousel = ({ title, data, loading, endpoint }: props) => {
  console.log(data);
  data?.map((item) => console.log(item.id));

  return (
    <Box marginBottom={10} marginTop={10}>
      <ContentWrapper>
        {title && <Text className="carouselTitle">{title}</Text>}
      </ContentWrapper>
      <ContentWrapper>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          breakpoints={{
            1024: {
              spaceBetween: 8,
              slidesPerView: 5,
            },
            324: {
              spaceBetween: 8,
              slidesPerView: 3,
            },
            724: {
              spaceBetween: 8,
              slidesPerView: 4,
            },
          }}
          //  pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {!loading
            ? data?.map((item) => (
                <SwiperSlide>
                  <Link to={`/${endpoint}/${item.id}`}>
                    <Box
                      _hover={{
                        transform: "scale(1.03)",
                        transition: "transform .15s ease-in",
                      }}
                    >
                      <Card
                        className="carouselItem"
                        overflow="hidden"
                        variant={"unstyled"}
                        bg={"transparent"}
                      >
                        <Box objectFit={"contain"} position={"relative"}>
                          <Image
                            borderRadius={12}
                            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                            objectFit="cover"
                            maxW="100%"
                          />
                          {item?.vote_average && (
                            <CircluarRating rating={item?.vote_average} />
                          )}
                        </Box>
                        <CardBody padding={1} marginTop={-3 - 4}>
                          <Stack data-type="Stack" spacing={1}>
                            <Text noOfLines={1} className="title">
                              {item.title || item.name}
                            </Text>
                            <Text noOfLines={1} className="date">
                              {moment(
                                `${item.release_date || item.first_air_date}`
                              ).format("MMM,DD YYYY")}
                            </Text>
                          </Stack>
                        </CardBody>
                      </Card>
                    </Box>
                  </Link>
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      </ContentWrapper>
    </Box>
  );
};

export default Carousel;
