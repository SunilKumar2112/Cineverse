import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const ErrorLayout = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Heading>Oops...</Heading>
      <Box padding={5}>
        <Text>
          {isRouteErrorResponse(error) ? "invalid page" : "unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorLayout;
