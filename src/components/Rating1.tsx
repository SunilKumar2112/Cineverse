import {Badge} from '@chakra-ui/react'
interface props{
    rate:number
}
const Rating = ({rate}:props) => {
  let Color=rate>7.5?'green': rate>6?'yellow':'';
  
  return (
    <Badge colorScheme={Color} fontSize={21} borderRadius='4px' paddingX={2}>{rate}</Badge>
  )
}

export default Rating