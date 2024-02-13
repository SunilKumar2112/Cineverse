import Carousel from '../../../components/Carousel/carousel';
import useCredits from '../../../hooks/useCredits';
import ContentQueryStore from '../../../store/ContentQuery';

const Popular = () => {
    const {ContentQuery}=ContentQueryStore()
    const { data, isLoading } = useCredits(`/${ContentQuery.Type}/popular`);
  
  return (
    <Carousel
    data={data?.results}
    loading={isLoading}
    endpoint={`${ContentQuery.Type}`} title={"What's Popular"}            />

);
  
}

export default Popular