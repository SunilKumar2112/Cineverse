import { HStack, Image, Text } from "@chakra-ui/react";
import { Key } from "react";
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

const PlatformIconList = ({ platforms }: props) => {
  const PrintICon = () => {
    if (platforms.IN && platforms.IN.flatrate) {
      
      return (
        <HStack marginY={1}>
          {platforms.IN.flatrate.map(
            (FlatRate: { logo_path: Key | null | undefined }) => (
              <Image
                key={FlatRate.logo_path}
                borderRadius="50%"
                src={`https://image.tmdb.org/t/p/w45${FlatRate.logo_path}`}
              />
            )
          )}
        </HStack>
      );
    } else {
      return <Text>Coming soon</Text>;
    }
  };

  return <>{PrintICon()}</>;
};

export default PlatformIconList;

// <HStack marginY={1}>
// {platforms.IN.flatrate.map(
//   (FlatRate: { logo_path: Key | null | undefined }) => (
//     <Image
//       key={FlatRate.logo_path}
//       borderRadius="50%"
//       src={`https://image.tmdb.org/t/p/w45${FlatRate.logo_path}`}
//     />
//   )
// )}
// </HStack>
