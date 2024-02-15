import { Box, Button, HStack, Image ,Text, UnorderedList } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ContentQueryStore from "../../store/ContentQuery";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../../assets/logo.webp";
import { HiOutlineSearch } from "react-icons/hi";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./styles.scss";
import SearchInput from "../SearchInput";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useState, useEffect } from "react";
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
  display: "flex",
  padding: "8px",
};

const Navbar = () => {
  const { SetType, ContentQuery } = ContentQueryStore();
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState();

  const navigate = useNavigate();
  const navigationHandler = (type: string) => {
    if (type === "movie") {
      navigate(`/explore/movie`);
    } else {
      navigate(`/explore/tv`);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
}, [location]);

const controlNavbar = () => {
    if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
            setShow("hide");
        } else {
            setShow("show");
        }
    } else {
        setShow("top");
    }
    setLastScrollY(window.scrollY);
};

useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    };
}, [lastScrollY]);

const searchQueryHandler = (event: { key: string; }) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
        setTimeout(() => {
            setShowSearch(false);
        }, 1000);
    }
};

const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
};

const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
};
  return (
    <Box  left={0} top={0} className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
    <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
            <li
                className="menuItem"
                onClick={() => navigationHandler("movie")}
            >
                Movies
            </li>
            <li
                className="menuItem"
                onClick={() => navigationHandler("tv")}
            >
                TV Shows
            </li>
            <li className="menuItem">
                <HiOutlineSearch onClick={openSearch} />
            </li>
        </ul>

        <div className="mobileMenuItems">
            <HiOutlineSearch onClick={openSearch} />
            {mobileMenu ? (
                <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
                <SlMenu onClick={openMobileMenu} />
            )}
        </div>
    </ContentWrapper>
    {showSearch && (
        <div className="searchBar">
            <ContentWrapper>
                <div className="searchInput">
                    <input
                        type="text"
                        placeholder="Search for a movie or tv show...."
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                    
                    />
                    <VscChromeClose color="black"
                        onClick={() => setShowSearch(false)}
                    />
                </div>
            </ContentWrapper>
        </div>
    )}
</Box>
);
};

export default Navbar;

{
  /* <Box className="navbar">
<ContentWrapper>
 
    <Image
      src={logo}
      boxSize="60px"
      onClick={() => navigate("/")}
      alt="Logo"
      marginTop={-2}
      objectFit={"cover"}
    />

    <SearchInput />

    <Box pr={20} justifyItems={"center"} display={'none'}>
    
        <Box className="menuItems"
          onClick={() => {
            SetType("movie");
            handleSubmit("movie");
          }}
    
        >
          Movies
        </Box >
        <Box className="menuItems"
          onClick={() => {
            SetType("tv");
            handleSubmit("tv");
          }}
         
        >
          {" "}
          Tv Shows
        </Box >
        
        <Box className="menuItems" >
      <HiOutlineSearch onClick={()=>'hi'} />
      </Box  >
     
  
    </Box>
  
</ContentWrapper>
</Box> */
}
