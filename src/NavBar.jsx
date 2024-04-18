import {
  Grid,
  AppBar,
  Autocomplete,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar color="transparent" position="static">
      <Grid
        container
        style={{
          width: 1470,
          margin: "auto",
          paddingBottom: 10,
        }}
        spacing={2}
        columnSpacing={16}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item width={75}>
          <img src="https://www.guvi.in/web-build/images/guvi-logo.8eeef9e2027d374479531095b012a87e.svg" />
        </Grid>
        <Grid item>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={locations}
            sx={{ width: 200 }}
            onChange={(event) => {
              const searchedLocation = event.target.innerText;
              searchedLocation?.length && navigate("/" + searchedLocation);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Locations" />
            )}
          />
        </Grid>
        <Grid item>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            id="demo-helper-text-misaligned-no-helper"
            label="Search"
            placeholder="Enter the name of restaurent"
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" size="medium">
            Login
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="medium">
            Register
          </Button>
        </Grid>
      </Grid>

      <div style={{ border: "1px solid rgb(199 199 199 / 40%)" }}></div>

      <Grid container justifyContent={"center"} columnSpacing={2}>
        <Grid item>
          <Button variant="text">Home</Button>
        </Grid>
        <Grid item>
          <Button variant="text">Book a table</Button>
        </Grid>
        <Grid item>
          <Button variant="text">Blog</Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}

const locations = [
  { label: "Delhi", id: 54343 },
  { label: "Chennai", id: 8923 },
  { label: "Mumbai", id: 3456 },
];
