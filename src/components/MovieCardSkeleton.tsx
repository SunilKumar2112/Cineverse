import { Card,CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
  

const MovieCardSkeleton = () => {
  return (
    <Card >
      <Skeleton height='350px' ></Skeleton>
    
        <Skeleton height='200px'>
            <CardBody>
<SkeletonText />
            </CardBody>
            
        </Skeleton>
    </Card>
  )
}

export default MovieCardSkeleton