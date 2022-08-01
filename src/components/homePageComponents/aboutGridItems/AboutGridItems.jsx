import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const AboutGridItems = ({ icon, heading, para }) => {
  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          maxWidth: "457px",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "space-between",
          margin: {
            xs: "0 auto",
          },
        }}
      >
        <Box
          sx={{
            width: "65px",
            height: "65px",
            borderRadius: "100%",
            backgroundColor: " #DFEFFF",
            position: "relative",

          }}
        >
          <Box sx={{ position: "absolute", top: "-10px", left: "13px" }}>
            <img src={icon} alt="" />
          </Box>
        </Box>
        <Box sx={{ maxWidth: "356px" }}>
          <Typography
            sx={{
              paddingBottom: "10px",
              color: "#000000",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              color: "#494949",
              lineHeight: "24px",
              fontSize: "16px",
              fontWeight: 500,

            }}
          >
            {para}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default AboutGridItems;
