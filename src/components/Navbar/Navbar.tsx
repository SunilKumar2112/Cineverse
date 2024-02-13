import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ContentQueryStore from "../../store/ContentQuery";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../../assets/logo.webp";
import { HiOutlineSearch } from "react-icons/hi";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import './styles.scss'
import SearchInput from "../SearchInput";
const css = {
  _hover: { color: "purple.500" },
};
const NavOuter = {
  area: "nav",
  bgColor: "transparent",
  borderRadius: "50px",
  border: "1px solid white",
  boxShadow: "1px 4px 4px 5px rgba(0, 0, 0, 0.25)",
  // position:'fixed',
  display: 'flex',
  padding: "8px",
};

const Navbar = () => {
  const { SetType, ContentQuery } = ContentQueryStore();
  const navigate = useNavigate();
  const handleSubmit = (type: string) => {
    if (type === "movie") {
      navigate(`/explore/movie`);
    } else {
      navigate(`/explore/tv`);
    }
  };

  return (
    <>
    
      <Box className="navbar" {...NavOuter}>
      <ContentWrapper>
          <Image
            src={logo}
            boxSize="60px"
            onClick={() => navigate("/")}
            alt="Logo"
            objectFit={"cover"}
          />

          <SearchInput />

          <Box pr={20}>
            <HStack whiteSpace={"nowrap"}>
              <Button
                onClick={() => {
                  SetType("movie");
                  handleSubmit("movie");
                }}
                {...css}
              >
                Movies
              </Button>
              <Button
                onClick={() => {
                  SetType("tv");
                  handleSubmit("tv");
                }}
                {...css}
              >
                {" "}
                Tv Shows
              </Button>
              {/* <Button>
              <HiOutlineSearch onClick={()=>'hi'} />
              </Button> */}
              <ColorModeSwitch></ColorModeSwitch>
            </HStack>
          </Box>
          </ContentWrapper>
      </Box>
   
    </>
  );
};

export default Navbar;
