import { Box, transition } from '@chakra-ui/react'
import { transform } from 'framer-motion';
import  { ReactNode } from 'react'
interface props{
    children:ReactNode;
}
const ContentContainer = ({children}:props) => {
  return (
    <Box  _hover={{
      transform: "scale(1.03)",
      transition: 'transform .15s ease-in'
    }}
    width='100%'
 overflow="hidden" 
 padding={1}
 borderRadius={10}>
    {children}
 </Box>
  )
}

export default ContentContainer