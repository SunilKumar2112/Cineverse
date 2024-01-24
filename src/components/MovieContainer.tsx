import { Box } from '@chakra-ui/react'
import  { ReactNode } from 'react'
interface props{
    children:ReactNode;
}
const MovieContainer = ({children}:props) => {
  return (
    <Box  
    width='100%'
 overflow="hidden" 
 padding={1}
 borderRadius={10}>
    {children}
 </Box>
  )
}

export default MovieContainer