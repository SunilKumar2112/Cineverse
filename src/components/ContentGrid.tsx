import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import { ContentQuery } from "../App";
import useContent, { Content } from "../hooks/useContent";
import ContentCard from "./ContentCard";
import ContentCardSkeleton from "./ContentCardSkeleton";
import ContentContainer from "./ContentContainer";
import React from "react";
import { FetchResponse } from "../Services/api-clients";
import InfiniteScroll from "react-infinite-scroll-component";
interface props {
  ContentQuery: ContentQuery;
}

const ContentGrid = ({ ContentQuery }: props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useContent(ContentQuery);
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
        {data?.pages.map((page,index) => (
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
