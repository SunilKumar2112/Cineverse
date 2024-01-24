import { Box } from '@chakra-ui/react'
import  { ReactNode } from 'react'
interface props{
    children:ReactNode;
}
const MovieContainer = ({children}:props) => {
  return (
    <Box  
  
    
 overflow="hidden" 
 padding={3}
 borderRadius={10}>
    {children}
 </Box>
  )
}

export default MovieContainer