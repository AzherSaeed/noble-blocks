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
    <Box mt={10} >
      <Container sx={{ maxWidth:'1100px'  }} maxWidth={false} disableGutters>
        {/*<Box mb={5} sx={{overflow : 'hidden'}} >*/}
        {/*  <Typography sx={{ fontSize: { xs: "25px", md: "32px" } , fontWeight : '500'   ,  textAlign : 'center' }}>*/}
        {/*    A web3-platform, backed by{" "}*/}
        {/*    <Box sx={{ fontWeight: "800" }} component="span">*/}
        {/*      cryptocurrency,{" "}*/}
        {/*    </Box>*/}
        {/*    that rewards researchers, removes publication barriers, and*/}
        {/*    streamlines operational costs.*/}
        {/*  </Typography>*/}
        {/*</Box>*/}
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
                          fontSize: "18px",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
              overflow : 'hidden',
            justifyContent: "space-between",
            alignItems: "center",
              margin : '10px',
              marginBottom : '70px'
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
            para="Hosting, formatting, editing and reviewing content management system"
          />
          <FeatureCard
            icon={trustworthIcon}
            heading="Trustworthy"
            para="Transparent and respectable publication costs and authors keep copyrights to their work"
          />
        </Box>
        {/*<Box sx={{ marginTop: "65px", marginBottom: "58px" }}>*/}
        {/*  <Box p={1} >*/}
        {/*    <Typography*/}
        {/*      sx={{*/}
        {/*        paddingBottom: "17px",*/}
        {/*        fontSize: { xs: "32px", md: "40px" },*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      Advance Knowledge Sharing to{" "}*/}
        {/*      <Box sx={{ fontWeight: "700" }} component="span">*/}
        {/*        Empower*/}
        {/*      </Box>{" "}*/}
        {/*      All People*/}
        {/*    </Typography>*/}
        {/*    <Typography*/}
        {/*      sx={{*/}
        {/*        fontSize: "16px",*/}
        {/*        fontWeight: 500,*/}
        {/*        lineHeight: "24px",*/}
        {/*        color: "#000000",*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      Make your research understandable, affordable, and accessible for*/}
        {/*      all. Enrich the scientific community and empower the greater*/}
        {/*      public by publishing your noble work on the blockchain.*/}
        {/*      NobleBlocks cultivates a true peer-review publication process in a*/}
        {/*      cost-efficient decentralised platform.*/}
        {/*    </Typography>*/}
        {/*  </Box>*/}
        {/*</Box>*/}
      </Container>
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
                  fontWeight: "700",
                  lineHeight: "58px",
                    fontSize : '38px'
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
                    fontWeight : '400',
                    fontSize : '18px'
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
        <Box >
            <div>
                <Typography
                    sx={{
                        fontSize: "38px",
                        fontWeight: 500,
                        color: "#000000",
                        textAlign: "center",
                        paddingBottom: "53px",
                    }}
                >
                    Our Team
                </Typography>
                <TeamContainer>
                   <div className='team-text' >
                       Team Members
                   </div>
                    <div className="grid-card-cnt">
                        <CustomImageCard
                            img={delroy}
                            name="Delroy Frazer"
                            position="Founder"
                            description="As a founder and entrepreneur, Delroy values innovation above all else. An enthusiastic early adopter of Web 3.0 and blockchain technology, Delroy loves the freedom and creativity new technologies are bringing to the world. His experience, vision, and enthusiasm drive the project forward. "

                        />
                        <CustomImageCard
                            img={mark}
                            name="Mark McDonald"
                            position="Co-Founder"
                            description="With more than 20 year’s experience managing the purse strings of successful businesses, Mark is a master of the profit-making arts. Currently the Senior Finance Director at J.Wray and Nephew Limited, Mark, he brings a wide range of management and financial expertise to the team."
                        />
                        <CustomImageCard
                            img={bentey}
                            name="Bente Andersen"
                            position="Co-Founder"
                            description="Bente helps corporations, SMEs and startups to grow, improve, and innovate. For the past 15 years, she’s delivered her clients creative and robust strategies and solutions based on deep research and analysis. She has worked within an array of different industries, markets, and cultural environments, always making a positive impact."
                        />
                        <CustomImageCard
                            img={todar}
                            name="Todd Vachev"
                            position="Fullstock Developer"
                            description="Todd is a best selling online instructor, with 230k+ students on Udemy and other platforms. He specializes in computer programming, MATLAB, and running online businesses. His knowledge of BlockChain adds volume to the team."
                        />
                        {/*<CustomImageCard*/}
                        {/*    img={delroy}*/}
                        {/*    name="Delroy Frazer"*/}
                        {/*    position="Founder"*/}
                        {/*    description="As a founder and entrepreneur, Delroy values innovation above all else. An enthusiastic early adopter of Web 3.0 and blockchain technology, Delroy loves the freedom and creativity new technologies are bringing to the world. His experience, vision, and enthusiasm drive the project forward. "*/}

                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={mark}*/}
                        {/*    name="Mark McDonald"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    description="With more than 20 year’s experience managing the purse strings of successful businesses, Mark is a master of the profit-making arts. Currently the Senior Finance Director at J.Wray and Nephew Limited, Mark, he brings a wide range of management and financial expertise to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={bentey}*/}
                        {/*    name="Bente Andersen"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    description="Bente helps corporations, SMEs and startups to grow, improve, and innovate. For the past 15 years, she’s delivered her clients creative and robust strategies and solutions based on deep research and analysis. She has worked within an array of different industries, markets, and cultural environments, always making a positive impact."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={todar}*/}
                        {/*    name="Todd Vachev"*/}
                        {/*    position="Fullstock Developer"*/}
                        {/*    addClass='right'*/}
                        {/*    description="Todd is a best selling online instructor, with 230k+ students on Udemy and other platforms. He specializes in computer programming, MATLAB, and running online businesses. His knowledge of BlockChain adds volume to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={delroy}*/}
                        {/*    name="Delroy Frazer"*/}
                        {/*    position="Founder"*/}
                        {/*    addClass='right'*/}
                        {/*    description="As a founder and entrepreneur, Delroy values innovation above all else. An enthusiastic early adopter of Web 3.0 and blockchain technology, Delroy loves the freedom and creativity new technologies are bringing to the world. His experience, vision, and enthusiasm drive the project forward. "*/}

                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={mark}*/}
                        {/*    name="Mark McDonald"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    addClass='right'*/}
                        {/*    description="With more than 20 year’s experience managing the purse strings of successful businesses, Mark is a master of the profit-making arts. Currently the Senior Finance Director at J.Wray and Nephew Limited, Mark, he brings a wide range of management and financial expertise to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={bentey}*/}
                        {/*    name="Bente Andersen"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    description="Bente helps corporations, SMEs and startups to grow, improve, and innovate. For the past 15 years, she’s delivered her clients creative and robust strategies and solutions based on deep research and analysis. She has worked within an array of different industries, markets, and cultural environments, always making a positive impact."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={todar}*/}
                        {/*    name="Todd Vachev"*/}
                        {/*    position="Fullstock Developer"*/}
                        {/*    description="Todd is a best selling online instructor, with 230k+ students on Udemy and other platforms. He specializes in computer programming, MATLAB, and running online businesses. His knowledge of BlockChain adds volume to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={delroy}*/}
                        {/*    name="Delroy Frazer"*/}
                        {/*    position="Founder"*/}
                        {/*    description="As a founder and entrepreneur, Delroy values innovation above all else. An enthusiastic early adopter of Web 3.0 and blockchain technology, Delroy loves the freedom and creativity new technologies are bringing to the world. His experience, vision, and enthusiasm drive the project forward. "*/}

                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={mark}*/}
                        {/*    name="Mark McDonald"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    description="With more than 20 year’s experience managing the purse strings of successful businesses, Mark is a master of the profit-making arts. Currently the Senior Finance Director at J.Wray and Nephew Limited, Mark, he brings a wide range of management and financial expertise to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={bentey}*/}
                        {/*    name="Bente Andersen"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    description="Bente helps corporations, SMEs and startups to grow, improve, and innovate. For the past 15 years, she’s delivered her clients creative and robust strategies and solutions based on deep research and analysis. She has worked within an array of different industries, markets, and cultural environments, always making a positive impact."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={todar}*/}
                        {/*    name="Todd Vachev"*/}
                        {/*    position="Fullstock Developer"*/}
                        {/*    description="Todd is a best selling online instructor, with 230k+ students on Udemy and other platforms. He specializes in computer programming, MATLAB, and running online businesses. His knowledge of BlockChain adds volume to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={delroy}*/}
                        {/*    name="Delroy Frazer"*/}
                        {/*    position="Founder"*/}
                        {/*    description="As a founder and entrepreneur, Delroy values innovation above all else. An enthusiastic early adopter of Web 3.0 and blockchain technology, Delroy loves the freedom and creativity new technologies are bringing to the world. His experience, vision, and enthusiasm drive the project forward. "*/}

                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={mark}*/}
                        {/*    name="Mark McDonald"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    addClass='right'*/}
                        {/*    description="With more than 20 year’s experience managing the purse strings of successful businesses, Mark is a master of the profit-making arts. Currently the Senior Finance Director at J.Wray and Nephew Limited, Mark, he brings a wide range of management and financial expertise to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={bentey}*/}
                        {/*    name="Bente Andersen"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    addClass='right'*/}
                        {/*    description="Bente helps corporations, SMEs and startups to grow, improve, and innovate. For the past 15 years, she’s delivered her clients creative and robust strategies and solutions based on deep research and analysis. She has worked within an array of different industries, markets, and cultural environments, always making a positive impact."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={todar}*/}
                        {/*    name="Todd Vachev"*/}
                        {/*    position="Fullstock Developer"*/}
                        {/*    addClass='right'*/}
                        {/*    description="Todd is a best selling online instructor, with 230k+ students on Udemy and other platforms. He specializes in computer programming, MATLAB, and running online businesses. His knowledge of BlockChain adds volume to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={delroy}*/}
                        {/*    name="Delroy Frazer"*/}
                        {/*    position="Founder"*/}
                        {/*    description="As a founder and entrepreneur, Delroy values innovation above all else. An enthusiastic early adopter of Web 3.0 and blockchain technology, Delroy loves the freedom and creativity new technologies are bringing to the world. His experience, vision, and enthusiasm drive the project forward. "*/}

                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={mark}*/}
                        {/*    name="Mark McDonald"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    description="With more than 20 year’s experience managing the purse strings of successful businesses, Mark is a master of the profit-making arts. Currently the Senior Finance Director at J.Wray and Nephew Limited, Mark, he brings a wide range of management and financial expertise to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={bentey}*/}
                        {/*    name="Bente Andersen"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    description="Bente helps corporations, SMEs and startups to grow, improve, and innovate. For the past 15 years, she’s delivered her clients creative and robust strategies and solutions based on deep research and analysis. She has worked within an array of different industries, markets, and cultural environments, always making a positive impact."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={todar}*/}
                        {/*    name="Todd Vachev"*/}
                        {/*    position="Fullstock Developer"*/}
                        {/*    description="Todd is a best selling online instructor, with 230k+ students on Udemy and other platforms. He specializes in computer programming, MATLAB, and running online businesses. His knowledge of BlockChain adds volume to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={delroy}*/}
                        {/*    name="Delroy Frazer"*/}
                        {/*    position="Founder"*/}
                        {/*    description="As a founder and entrepreneur, Delroy values innovation above all else. An enthusiastic early adopter of Web 3.0 and blockchain technology, Delroy loves the freedom and creativity new technologies are bringing to the world. His experience, vision, and enthusiasm drive the project forward. "*/}

                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={mark}*/}
                        {/*    name="Mark McDonald"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    description="With more than 20 year’s experience managing the purse strings of successful businesses, Mark is a master of the profit-making arts. Currently the Senior Finance Director at J.Wray and Nephew Limited, Mark, he brings a wide range of management and financial expertise to the team."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={bentey}*/}
                        {/*    name="Bente Andersen"*/}
                        {/*    position="Co-Founder"*/}
                        {/*    description="Bente helps corporations, SMEs and startups to grow, improve, and innovate. For the past 15 years, she’s delivered her clients creative and robust strategies and solutions based on deep research and analysis. She has worked within an array of different industries, markets, and cultural environments, always making a positive impact."*/}
                        {/*/>*/}
                        {/*<CustomImageCard*/}
                        {/*    img={todar}*/}
                        {/*    name="Todd Vachev"*/}
                        {/*    position="Fullstock Developer"*/}
                        {/*    addClass='right'*/}
                        {/*    description="Todd is a best selling online instructor, with 230k+ students on Udemy and other platforms. He specializes in computer programming, MATLAB, and running online businesses. His knowledge of BlockChain adds volume to the team."*/}
                        {/*/>*/}

                    </div>
                </TeamContainer>
            </div>
        </Box>
    </Box>
  );
};

export default Home;
