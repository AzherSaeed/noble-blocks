import React from "react";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import { Typography, Box } from "@mui/material";


const FeatureCard = ({ icon, heading, para }) => {
  return (
    <Box
      sx={{
        margin: {
          xs: "20px",
        },
        // width: "337px",
        // height: "290px",
          paddingX :'46px',
          paddingY : '45px',
        background: "#FFFFFF",
        boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.05)",
        borderRadius: 6,
      }}
    >
      <Box
        sx={{
          maxWidth: "287px",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
            textAlign : 'center'
        }}
        p={0}

      >
        <Box>
          <img src={icon} alt="" />
        </Box>
        <Typography
         fontSize={24}
          sx={{ margin: "50px 0 8px 0", fontWeight: 500   }}

        >
          {heading}
        </Typography>
        <Typography variant="body2" sx={{ color : '#494949' , fontSize: "16px" , lineHeight : '19px' }}>
          {para}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeatureCard;
