import React from 'react';
import {telegram , footerLogo , twitter , baaa , instagram} from '../../assets';

import {FooterContainer} from "./style";
import {Container} from "@mui/material";


const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <div className='footer-content' >
                    <div className='footer-content-logo' >
                        <img src={footerLogo} />
                    </div>
                    <div className='footer-content-icon' >
                        <img src={telegram}/>
                        <img src={instagram}/>
                        <img src={baaa}/>
                        <img src={twitter} />
                    </div>
                </div>
            </Container>
        </FooterContainer>
    )
}


export default  Footer;