import React from 'react';
import {HeaderContainer} from "./style";
import {Box, Container, Grid} from "@mui/material";
import {headerVideo , playButton ,avatar1 , avatar2 , avatar3} from '../assets'

const Header = () => {
    return (
        <HeaderContainer>
            <Container   sx={{ maxWidth:'1330px' , p : '10px'  }} maxWidth={false} disableGutters>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className='header-content' >
                            <div className='header-content-heading' >
                                <p>Next Generation</p>
                                <p><span className='subheadingHeader' >Scientific Publication</span> </p>
                                <h6>A web3-platform, backed by cryptocurrency, that rewards researchers, removes publication barriers, and streamlines operational costs.</h6>
                            </div>
                            <div className='header-content-buttons' >
                                <button>Get Early Access</button>
                                <img src={playButton} alt='playbutton' />
                                <p>How it works</p>
                            </div>
                            <div className='header-content-avatar' >
                                <div className='header-content-avatar-img' >
                                    <div className='header-content-avatar-img-1' >
                                        <img src={avatar1} alt='avatar1' />
                                    </div>
                                    <div className='header-content-avatar-img-2' >
                                        <img src={avatar2} alt='avatar2' />
                                    </div>
                                    <div className='header-content-avatar-img-3' >
                                        <img src={avatar3} alt='avatar3' />
                                    </div>
                                </div>
                                <div className='header-content-avatar-para' >
                                    <p>12,256 members are in waiting list</p>
                                </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='headerSectionVideo' >
                            <img src={headerVideo} alt='headerVideo' />
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </HeaderContainer>
    )
}

export default Header;