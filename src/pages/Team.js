import React from 'react'
import {Box, Typography} from "@mui/material";
import {TeamContainer} from "./style";
import {CustomImageCard} from "../components";
import {bentey, delroy, mark, todar} from "../assets";

const Teams = () => {
    return (
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


                    </div>
                </TeamContainer>
            </div>
        </Box>
    )
}
export  default  Teams