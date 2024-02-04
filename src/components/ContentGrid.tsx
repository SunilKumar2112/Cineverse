import { SimpleGrid, Text } from "@chakra-ui/react";

import { genre } from "../hooks/usegenre";
import ContentCard from "./ContentCard";
import ContentCardSkeleton from "./ContentCardSkeleton";
import ContentContainer from "./ContentContainer";
import useContent from "../hooks/useContent";
import { ContentQuery } from "../App";
interface props{
  ContentQuery:ContentQuery
}

const ContentGrid = ({ContentQuery}:props) => {
  const { data, error, isLoading } = useContent(ContentQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if(error) return error && <Text>{error}</Text>
  return (
    <>
      
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <ContentContainer key={skeleton}>
              <ContentCardSkeleton  />
            </ContentContainer>
          ))}

        {data.map((item) => (
          <ContentContainer key={item.id}>
            <ContentCard  content={item} mediaType={ContentQuery.Type}/>
          </ContentContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ContentGrid;