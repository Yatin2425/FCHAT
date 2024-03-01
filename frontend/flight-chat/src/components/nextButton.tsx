import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

const NextButton = () => {
    const [ishovered, setIshovered] = useState(false);
    const white = {
        backgroundColor: "white",
        // Add other styles as needed
      };
    
      const transparent = {
        backgroundColor: "transparent",
        // Add other styles as needed
      };
      const handleMouseEnter = () => {
        setIshovered(true);
      };
    
      const handleMouseLeave = () => {
        setIshovered(false);
      };
    
  return (
    <button
    type="submit"
    id="NextButton"
    style={ishovered ? white : transparent}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
      <ArrowForwardIosIcon  style={{ fontSize: 30 }} />
    </button>
  );
};

export default NextButton;
