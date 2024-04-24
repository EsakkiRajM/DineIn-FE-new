import { Grid } from "@mui/material";
import Navbar from "./NavBar";
import BookingPage from "./BookingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const BasicPage = () => {
    console.log(import.meta.env, "process");
    return (
      <Grid item>
        <Navbar />
        <BookingPage />
      </Grid>
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
