import React, { useState } from "react";
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
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

import BookingModal from "./BookingModal";

import { restaurant } from "./constants";

export default function HotelList({ location = "" }) {
  const [selectedRestaurentId, setSelectedRestaurentId] = useState("");

  const urlLocation = location ? location.toLowerCase() : "delhi";

  const restaurentData = restaurant[urlLocation];

  const handleCardClick = (restaurentId) => {
    setSelectedRestaurentId(restaurentId);
  };

  return (
    <Grid item>
      <Grid container flexDirection={"row"} rowGap={1} columnGap={1}>
        {restaurentData.map((hotel, index) => {
          const { image, ratings, location, priceDetail, name, tags, id } =
            hotel;
          return (
            <Grid
              onClick={() => handleCardClick(id)}
              style={{ cursor: "pointer" }}
              rowGap={2}
              columnGap={2}
              key={index}
            >
              <Card sx={{ maxWidth: 345 }}>
                <div style={{ position: "relative" }}>
                  <CardMedia
                    sx={{ height: 275 }}
                    image={image}
                    title="green iguana"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "#b3ca42",
                      width: 30,
                      height: 30,
                      textAlign: "center",
                    }}
                  >
                    <Typography color={"white"}>{ratings}</Typography>
                  </div>
                </div>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {priceDetail} | {tags.map((e) => `${e} `)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <BookingModal
        setSelectedRestaurentId={setSelectedRestaurentId}
        selectedRestaurentId={selectedRestaurentId}
      />
    </Grid>
  );
}
