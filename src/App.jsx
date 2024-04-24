import { Grid } from "@mui/material";
import Navbar from "./NavBar";
import BookingPage from "./BookingPage";
import { AppProvider } from "./Context";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

function App() {
  const BasicPage = () => {
    const [searchedHotel, setSearchedHotel] = React.useState("");

    return (
      <AppProvider value={{ searchedHotel, setSearchedHotel }}>
        <Grid item>
          <Navbar />
          <BookingPage />
        </Grid>
      </AppProvider>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:location" element={<BasicPage />}></Route>
        <Route path="*" element={<BasicPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
