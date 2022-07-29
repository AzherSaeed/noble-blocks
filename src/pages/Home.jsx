import { Box, Typography, Grid , Container} from "@mui/material";
import React from "react";

import {
  efficentIcon,
  rewardingIcon,
  trustworthIcon,
  openAcces,
    multidictionary,
    stramlined,
    timestamped,
    indexed,
    affortable
} from "../assets";

import { FeatureCard, AboutGridItems } from "../components";

const Home = () => {
  return (
    <Box mt={10} >
      <Container sx={{ maxWidth:'1100px'  }} maxWidth={false} disableGutters>
        <Box mb={5}>
          <Typography sx={{ fontSize: { xs: "25px", md: "32px" } , fontWeight : '500'   ,  textAlign : 'center' }}>
            A web3-platform, backed by{" "}
            <Box sx={{ fontWeight: "800" }} component="span">
              cryptocurrency,{" "}
            </Box>
            that rewards researchers, removes publication barriers, and
            streamlines operational costs.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FeatureCard
            icon={rewardingIcon}
            heading="Rewarding"
            para="Reward work and promote loyalty with universities and funding bodies"
          />
          <FeatureCard
            icon={efficentIcon}
            heading="Efficent"
            para="Reward work and promote loyalty with universities and funding bodies"
          />
          <FeatureCard
            icon={trustworthIcon}
            heading="Trustworthy"
            para="Reward work and promote loyalty with universities and funding bodies"
          />
        </Box>
        <Box sx={{ marginTop: "65px", marginBottom: "58px" }}>
          <Box p={1} >
            <Typography
              sx={{
                paddingBottom: "17px",
                fontSize: { xs: "32px", md: "40px" },
              }}
            >
              Advance Knowledge Sharing to{" "}
              <Box sx={{ fontWeight: "700" }} component="span">
                Empower
              </Box>{" "}
              All People
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                color: "#000000",
              }}
            >
              Make your research understandable, affordable, and accessible for
              all. Enrich the scientific community and empower the greater
              public by publishing your noble work on the blockchain.
              NobleBlocks cultivates a true peer-review publication process in a
              cost-efficient decentralised platform.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          bgcolor: "skyBlueBg",
          paddingTop: "44px",
          paddingBottom: "34px",
          borderRadius: "20px",
          marginBottom: "80px",
        }}
      >
        <Box sx={{ maxWidth: "1082px", margin: "0 auto" }}>
          <Box>
            <Box sx={{ textAlign: "center", padding: "12px" }}>
              <Typography
                variant="h1"
                sx={{
                  color: "lightblue",
                  fontWeight: "500",
                  lineHeight: "58px",
                }}
              >
                About NobleBlocks
              </Typography>
              <Typography
                sx={{
                  color: "#E6E6E6",
                  textAlign: "start",
                  paddingTop: "18px",
                  maxWidth: "944px",
                  margin: "0 auto",
                  marginBottom: "23px",
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
                margin: "0 auto",
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
                  //   border: "2px solid gray",
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
