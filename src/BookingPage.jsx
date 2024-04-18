import {
  Grid,
  Typography,
  AppBar,
  Autocomplete,
  TextField,
  InputAdornment,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Breadcrumbs,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import Filter from "./Filter";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import HotelList from "./HotelList";

function BookingPage() {
  return (
    <Grid
      container
      style={{
        margin: "auto",
        width: 1475,
      }}
      spacing={4}
    >
      <Grid item lg={3}>
        <Filter />
      </Grid>

      <Grid item lg={9}>
        <Grid item>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <Typography variant="h3" fontSize={30}>
                Best Restaurants Near Me in Chennai 20953
              </Typography>
            </Grid>

            <Grid item>
              <Grid container alignItems={"center"} spacing={2}>
                <Grid item>
                  <Typography variant="h5" fontSize={20}>
                    Sort
                  </Typography>
                </Grid>

                <Grid item>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={sortData}
                    sx={{ width: 150 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Movie" />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item paddingTop={4}>
          <HotelList />
        </Grid>
      </Grid>
    </Grid>
  );
}

const breadcrumbs = [
  <Grid underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
    MUI
  </Grid>,
  <Grid
    underline="hover"
    key="2"
    color="inherit"
    href="/material-ui/getting-started/installation/"
    onClick={() => {}}
  >
    Core
  </Grid>,
  <Typography key="3" color="text.primary">
    Breadcrumb
  </Typography>,
];

const sortData = [
  { label: "Ratings", key: 1994 },
  { label: "Price High to Low", key: 1972 },
  { label: "Price Low to High", key: 1974 },
  { label: "Popularity", key: 1975 },
];

export default BookingPage;
