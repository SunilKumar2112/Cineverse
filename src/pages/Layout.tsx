import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box ml={{ lg: "100px" }} mr={{ lg: "100px" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
