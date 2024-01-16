
import { Text } from "@chakra-ui/react";
import useMovie from "../hooks/useMovie";



const MovieGrid = () => {
    const {movie,error}=useMovie()
    

  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
    {movie.map((item)=><li>{item.original_title}</li>)}
   </ul>
   </>
  )
}

export default MovieGrid