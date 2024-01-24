import { HStack, Image, Text } from "@chakra-ui/react";
interface props {
  platforms: provider;
}
interface provider {
  provider_name: string;
  IN: ss;
}
interface ss {
  rent: string[];
  flatrate: FlatRate;
}
export interface FlatRate {
  provider_name: string;
  logo_path: string;
}

const PlatformIconList =  ({ platforms }: provider) => {
 
  
 
  

  const PrintICon=()=>{
    if(platforms.IN){
     return(  <HStack marginY={1}>
      {platforms.IN.flatrate.map((FlatRate)=> (<Image borderRadius='50%'
      src={`https://image.tmdb.org/t/p/w45${FlatRate.logo_path}`}
    /> ))}

     </HStack> )

     }
    else{
     return  <Text>Not Yet</Text>
    }

  }
  
  

  return <>
  
  {PrintICon()}
  </>;
};

export default PlatformIconList;

{
  /* <Text>Not Yet</Text> */
}
{
  /* { <HStack marginY={1}>
    {a.map((FlatRate)=> <Image borderRadius='50%'
    src={`https://image.tmdb.org/t/p/w45${FlatRate.logo_path}`}
  /> )}
   
   </HStack> }  */
}
