import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import { Box } from '@chakra-ui/react'
import useCredits from '../../../hooks/useCredits';
import Img from '../../../components/Lazyloadimage/Img';
import './styles.scss'
const ContentBanner = () => {
  const { data, isFetching } = useCredits("/movie/upcoming");
  const ram=data?.results?.[Math.floor(Math.random()*20)];
  

    
  return (
    <Box  className='heroBanner'>
      {!isFetching &&(
        <Box opacity={0.3} className='backdrop-img' >
          <Img   src={`https://image.tmdb.org/t/p/original/${ram.backdrop_path}`}></Img>
        </Box>
      )
      }
        <div className="opacity-layer"></div>
    </Box>
  )
}

export default ContentBanner