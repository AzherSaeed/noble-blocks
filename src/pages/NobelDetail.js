import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {FeatureCard} from "../components";
import {efficentIcon, rewardingIcon, trustworthIcon} from "../assets";

const NobelDetail = () => {
    return(
        <Container sx={{ maxWidth:'1100px'  }} maxWidth={false} disableGutters>

            <Box sx={{ marginTop: "100px", marginBottom: "29px" }}>
                <Box p={2} >
                    <Typography
                        sx={{
                            // paddingBottom: "17px",
                            fontSize: { xs: "32px", md: "40px" },
                            fontFamily : 'Inter',
                            letterSpacing : '-0.022em',
                            fontWeight : 500,
                            lineHeight : '150%',
                            textAlign : 'center'
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
                            textAlign : 'center',
                            maxWidth : '970px',
                            margin : '0 auto'
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
                    paddingBottom : '77px'
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

        </Container>
    )
}

export  default NobelDetail