import React from "react";
import "./customImageCard.css";

import { Grid, Typography, Box } from "@mui/material";

const CustomImageCard = ({ img, name, position, description }) => {
  return (
    <div className="grid-img-cnt">
      <div style={{ overflow: "hidden", height: "100%" }}>
        <img className="grid-img" src={img} />
      </div>
      <div className="grid-img-content">
        <Typography>{name}</Typography>
        <Typography>{position}</Typography>
        <Typography>{description}</Typography>
      </div>
    </div>
  );
};

export default CustomImageCard;
