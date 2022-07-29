
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logo, bars, times } from '../../assets';
import NavBarContainer from './style';
import {Button, Container} from "@mui/material";




const Index = () => {
    const [navToggler, setnavToggler] = useState(false);
    return (
        <NavBarContainer>
            <Container sx={{ maxWidth:'1330px'  }} maxWidth={false} disableGutters>
                <navbar className="navbar">
                    <div className="navbar-logo">
                        <Link to='/' >
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar-outer">
                        <div className={navToggler ? 'navbar-navItem toggler-active' : 'navbar-navItem'}>
                            <NavLink exact activeClassName="active" to="#">
                                Team
                            </NavLink>
                            <NavLink activeClassName="active" to="#">
                                Roadmap
                            </NavLink>
                            <NavLink activeClassName="active" to="#">
                                About Us
                            </NavLink>
                            <NavLink activeClassName="active" to="#">
                                <button className='navbar-bton' >Get Early Access</button>
                            </NavLink>

                        </div>
                        <div className="navbar-toggler" onClick={() => setnavToggler(!navToggler)}>
                            {navToggler ? <img src={times} alt="times" /> : <img src={bars} alt="bars" />}
                        </div>
                    </div>
                </navbar>
            </Container>
        </NavBarContainer>
    );
};

export default Index;
