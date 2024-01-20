import { Card,CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
  

const MovieCardSkeleton = () => {
  return (
    <Card height='550px'
    width='300px'
    borderRadius={10}>
    
        <Skeleton height='200px'>
            <CardBody>
<SkeletonText />
            </CardBody>
            
        </Skeleton>
    </Card>
  )
}

export default MovieCardSkeleton