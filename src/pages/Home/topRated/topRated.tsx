
import ContentQueryStore from '../../../store/ContentQuery';
import useCredits from '../../../hooks/useCredits';
import Carousel from '../../../components/Carousel/carousel';

const TopRated = () => {
    const {ContentQuery}=ContentQueryStore()
    const { data, isLoading } = useCredits(`/${ContentQuery.Type}/top_rated`);
 
  
  return (
    <Carousel
    data={data?.results}
    loading={isLoading}
    endpoint={`${ContentQuery.Type}`} title={'Top Rated'}            />

);
  
}

export default TopRated