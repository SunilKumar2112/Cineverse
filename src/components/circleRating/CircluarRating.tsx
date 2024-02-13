import "react-circular-progressbar/dist/styles.css";

import { Box, Text } from "@chakra-ui/react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "./Styless.scss";
interface Props {
  rating: any | undefined;
}

// .circleRating {
//     background-color: black;
//     border-radius: 50%;
//     padding: 12px;

// }
// .CircularProgressbar-text {
//     font-size: 34px;
//     font-weight: 700;
//     fill: var(--black);
// }
// .CircularProgressbar-trail {
//     stroke: transparent;
// }
const CircluarRating = ({ rating }: Props) => {
  var rateValue = rating?.toFixed(1);
  const rateValueNumber = parseFloat(`${rateValue}`);
 
  if (!rateValue) return null;
  return (
    <>
      {" "}
      <div className="circleRating">
        <CircularProgressbar
          value={rateValueNumber}
          maxValue={10}
          text={`${rateValueNumber}`}
          styles={buildStyles({
            pathColor:
              rateValueNumber < 5
                ? "red"
                : rateValueNumber < 7
                ? "orange"
                : "green",
          })}
        />
      </div>
    </>
  );
};

export default CircluarRating;
// Inter,Avenir,Helvetica,Arial,sans-serif
{
  /* <Box
className="circleRating"
display={rating != undefined ? "block" : "none"}
width={{ base: "70px", md: "90px" }}
borderRadius="50%"
mt="12px"
mb="12px"
bg={"#161617"}
>
<CircularProgressbar
  value={rateValueNumber}
  maxValue={10}
  text={`${rateValueNumber}`}
  styles={({
    trail: {
  
      stroke: "transparent",
     
    },
    path:{
    
    stroke:
      rateValueNumber < 5
        ? "red"
        : rateValueNumber < 7
        ? "orange"
        : "green",
       
  },
  text:{
      fontFamily: 'Avenir',
      fontSize: '34px',
fontWeight:'700',
fill: 'white',

  }
})}
/>
</Box> */
}
