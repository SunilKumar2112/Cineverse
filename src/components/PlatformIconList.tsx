
import { FlatRate } from '../hooks/Providers'
import {Text,Image,HStack} from "@chakra-ui/react"
interface props{
    platforms:FlatRate[]
}
const PlatformIconList = ({platforms}:props) => {
    console.log(platforms);
    
  return (
    <>
    <HStack marginY={1}>
    {platforms.map((FlatRate)=> <Image borderRadius='50%'
          src={`https://image.tmdb.org/t/p/w45${FlatRate.logo_path}`}
        /> )}
   
   </HStack>
    </>
  )
}

export default PlatformIconList