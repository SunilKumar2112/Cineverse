import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="350px" />

    
        <CardBody height="200px">
          <SkeletonText />
        </CardBody>
    
    </Card>
  );
};

export default MovieCardSkeleton;
