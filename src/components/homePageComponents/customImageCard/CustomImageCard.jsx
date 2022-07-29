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
        <Typography>{name}</Typography>
        <Typography>{position}</Typography>
        <Typography>{description}</Typography>
      </div>
    </div>
  );
};

export default CustomImageCard;
