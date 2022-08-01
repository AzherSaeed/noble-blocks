import React from "react";
import "./customImageCard.css";

import { Grid, Typography, Box } from "@mui/material";

const CustomImageCard = ({ img, name, position, description , addClass = ''}) => {
  return (
    <div className="grid-img-cnt">
      <div className='grid-specific-img' >
        <img className="grid-img" src={img} />
      </div>
      <div className={`grid-img-content ${addClass}`}>
        <Typography fontSize={20} fontFamily='Inter' fontWeight={600} >{name}</Typography>
        <Typography fontSize={16} fontFamily='Inter' >{position}</Typography>
        <Typography fontSize={17} fontFamily='Inter' >{description}</Typography>
      </div>
    </div>
  );
};

export default CustomImageCard;
