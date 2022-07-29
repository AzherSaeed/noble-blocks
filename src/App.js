import React from "react";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import { Main } from "./layout";
import Navbar from './layout/Navbar'


import { Home , Header } from "./pages";
import Footer from "./layout/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
         <Navbar/>
        <Main>
          <Routes>
            <Route path="/" element={
               <div>
                   <Header />
                   <Home/>
               </div>
            } />
          </Routes>
        </Main>
         <Footer/>
    </ThemeProvider>
  );
};

export default App;
