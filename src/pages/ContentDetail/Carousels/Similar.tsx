import Carousel from "../../../components/Carousel/carousel";
import useCredits from "../../../hooks/useCredits";

interface props {
  type: string;
  id: string;
}

const Similar = ({ type, id }: props) => {
  const url = `${type}/${id}/similar`;
  const { data, isLoading } = useCredits(url);

  const title = type === "tv" ? "Similar TV Shows" : "Similar Movies";


  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={isLoading}
      endpoint={type}
    />
  );
};

export default Similar;
// {data?.results.map((item) => (
//   <Card
//     className="carouselItem"
//     overflow="hidden"
//     variant={"unstyled"}
//     bg={"transparent"}
//   >
//     <Box objectFit={"contain"} position={"relative"}>
//       <Image
//         borderRadius={12}
//         src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
//         objectFit="cover"
//         maxW="100%"
//       />

//       <CircluarRating rating={5} />
//     </Box>
//     <CardBody padding={1} marginTop={-3 - 4}>
//       <Stack data-type="Stack">
//         <Text noOfLines={1} className="title">
//           {item.title || item.name}
//         </Text>
//         <Text noOfLines={1} className="date">
//           {moment(
//             `${item.release_date || item.first_air_date}`
//           ).format("MMM,DD YYYY")}
//         </Text>
//       </Stack>
//     </CardBody>
//   </Card>
// ))}
