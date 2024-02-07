import { HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  platforms: ProviderData[];
}
export interface ProviderData {
  IN: ss[];
  flatrate: FlatRate[];
}

// export interface ProviderData {
//   provider_name: string;
//   IN: {
//     rent: {
//       logo_path: string;
//     }[];
//     flatrate: {
//       provider_name: string;
//       logo_path: string;
//     }[];
//   };
// }
interface ss {
  rent: string[];
  flatrate: FlatRate[];
}

export interface FlatRate {
  provider_name: string;
  logo_path: string;
}

const PlatformIconList = ({ platforms }: Props) => {
  const PrintICon = () => {
    const inProperty = Object.entries(platforms).find(
      ([key, value]) => key === "IN"
    );
    if (inProperty) {
      const [, a] = inProperty;
      return (
        <HStack marginY={1}>
          {a.flatrate?.map((FlatRate) => (
            <Image
              key={FlatRate.provider_name}
              borderRadius="50%"
              src={`https://image.tmdb.org/t/p/w45${FlatRate.logo_path}`}
            />
          ))}
        </HStack>
      );
    } else {
      return <Text>Not Yet</Text>;
    }
  };

  return <>{PrintICon()}</>;
};

export default PlatformIconList;

// const PrintICon = () => {
//   if (platforms && platforms.IN && platforms.IN.flatrate) {
//     return (
//       <HStack marginY={1}>
//         {platforms.IN.flatrate?.map((FlatRate) => (
//           <Image
//             key={FlatRate.provider_name}
//             borderRadius="50%"
//             src={`https://image.tmdb.org/t/p/w45${FlatRate.logo_path}`}
//           />
//         ))}
//       </HStack>
//     );
//   } else {
//     return <Text>Not Yet</Text>;
//   }
// };
