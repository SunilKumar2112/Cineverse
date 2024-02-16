import ContentQueryStore from '../../../store/ContentQuery';
import useCredits from '../../../hooks/useCredits';
import Carousel from '../../../components/Carousel/carousel';

const Trending = () => {
  
    const {ContentQuery}=ContentQueryStore()
    const { data, isLoading } = useCredits(`/trending/all/day`);

  
  return (
    <Carousel
    data={data?.results}
    loading={isLoading}
    endpoint={`${ContentQuery.Type}`} title={'Trending'}            />

);
  
  
}

export default Trending