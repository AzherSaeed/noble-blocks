import { Box, Typography, Grid , Container} from "@mui/material";
import React from "react";
import "./homePage/home.css";
import {TeamContainer} from "./style";
import {
    efficentIcon,
    rewardingIcon,
    trustworthIcon,
    openAcces,
    multidictionary,
    stramlined,
    timestamped,
    indexed,
    affortable, delroy, bentey, mark , todar
} from "../assets";

import {FeatureCard, AboutGridItems, CustomImageCard} from "../components";

const Home = () => {
  return (
    <Box  >

      <Box
        sx={{
          bgcolor: "skyBlueBg",
          paddingTop: "44px",
          paddingBottom: "34px",

          marginBottom: "80px",
        }}
      >
        <Box sx={{ maxWidth: "1082px", margin: "0 auto" }}>
          <Box>
            <Box sx={{ textAlign: "center", padding: "12px" }}>
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontWeight: "500",
                  lineHeight: "58px",
                    fontSize : '48px',
                    fontFamily : 'Inter'
                }}
                display='flex'
                gap={1}
                justifyContent='center'
                flexWrap='wrap'
              >
                  <span>About</span>
                  <span style={{fontWeight : '700'}} >
                      NobleBlocks
                  </span>

              </Typography>
              <Typography
                sx={{
                  color: "#E6E6E6",
                  textAlign: "start",
                  paddingTop: "18px",
                  maxWidth: "990px",
                  margin: "0 auto",
                  marginBottom: "23px",
                    fontWeight : '500',
                    fontSize : '16px',
                    lineHeight : '150%',
                    fontFamily : 'Inter',
                    alignSelf : 'center'
                }}
              >
                NobleBlocks is a scientific journal on the blockchain that
                decentralises and democratises publication and access to
                academic journals and scientific publications. It offers
                innovative solutions to long-standing challenges in the field of
                research.
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "1010px",
                margin: "10px",
                background: "#FFFFFF",
                boxShadow: " 0px 0px 30px rgba(0, 0, 0, 0.12)",
                borderRadius: "20px",
                padding: "50px 12px",

              }}
            >
              <Box
                sx={{
                  maxWidth: "944px",
                  margin: "0 auto",
                }}
              >
                <Grid container rowSpacing="63px" columnSpacing="23px">
                  <AboutGridItems
                    icon={openAcces}
                    heading="Open Access"
                    para="Break through geographical barriers and expand your reach. Give your research global access while retaining all copyrights"
                  />
                  <AboutGridItems
                    icon={stramlined}
                    heading="Streamlined Process"
                    para="Have irrefutable time-stamped documentation and evidence of your research findings and discoveries."
                  />
                  <AboutGridItems
                    icon={timestamped}
                    heading="Time Stamped"
                    para="Publish research on any topic you want. Contribute to established topics or create your own niche."
                  />
                  <AboutGridItems
                    icon={indexed}
                    heading="Fully Indexed"
                    para="Fast track the publication of your work. Our seamless workflow expedites the entire publishing process."
                  />
                  <AboutGridItems
                    icon={multidictionary}
                    heading="Multidisciplinary"
                    para="Get your research fully searchable on Pubmed Central, Scopus, SciSearch, and other recognised databases."
                  />
                  <AboutGridItems
                    icon={affortable}
                    heading="Affordable"
                    para="Overcome economic barriers. Low publication charges enable you to bring your work to the public."
                  />
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default Home;
