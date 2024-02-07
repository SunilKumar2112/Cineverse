import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";


import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useContent, { Content } from "../hooks/useContent";
import ContentQueryStore from "../store/ContentQuery";
import ContentCard from "./ContentCard";
import ContentCardSkeleton from "./ContentCardSkeleton";
import ContentContainer from "./ContentContainer";


const ContentGrid = () => {
  const { ContentQuery } = ContentQueryStore();
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useContent();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fetchContentCount =
    data?.pages.reduce(
      (total: any, page: { results: string | any[] }) =>
        total + page.results.length,
      0
    ) || 0;

  if (error) return <Text>{error.message}</Text>;
  return (
    // <>
    <InfiniteScroll
      dataLength={fetchContentCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <ContentContainer key={skeleton}>
              <ContentCardSkeleton />
            </ContentContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((item: Content) => (
              <ContentContainer key={item.id}>
                <ContentCard content={item} mediaType={ContentQuery.Type} />
              </ContentContainer>
            ))}
          </React.Fragment>
        ))}
        {/* {data.map((item:any) => (
          <ContentContainer key={item.id}>
            <ContentCard  content={item} mediaType={ContentQuery.Type}/>
          </ContentContainer>
        ))} */}
      </SimpleGrid>
    </InfiniteScroll>

    // </>
  );
};

export default ContentGrid;

// button
{
  /* {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More..."}
        </Button>
      )} */
}
