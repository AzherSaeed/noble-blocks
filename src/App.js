import React from "react";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import { Main } from "./layout";

import { Home } from "./pages";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        {/* Header */}
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
        {/* Footer */}
      </div>
    </ThemeProvider>
  );
};

export default App;
