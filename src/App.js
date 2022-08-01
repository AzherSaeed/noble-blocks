import React from "react";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from './layout/Navbar'


import { Home , Header  , Teams , NobleDetail } from "./pages";
import Footer from "./layout/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
         <div className='headerBackground' >
             <Navbar/>
             <Header />
             <NobleDetail/>
         </div>

            <Home/>
        <Teams/>
         <Footer/>
    </ThemeProvider>
  );
};

export default App;
