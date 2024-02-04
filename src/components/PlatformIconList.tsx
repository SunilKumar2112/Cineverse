import { HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  platforms: provider;
}

interface provider {
  provider_name: string;
  IN: ss;
}

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
    if (platforms.IN) {
      return (
        <HStack marginY={1}>
          {platforms.IN.flatrate?.map((FlatRate) => (
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