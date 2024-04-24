/* eslint-disable react/prop-types */
import { useState } from "react";
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

import BookingModal from "./BookingModal";

import { restaurant } from "./constants";

export default function HotelList({
  location = "",
  filteredTags = [],
  selectedSort = "",
}) {
  const [selectedRestaurentId, setSelectedRestaurentId] = useState("");

  const urlLocation = location ? location.toLowerCase() : "delhi";

  let restaurentData = restaurant[urlLocation];

  // filteredTags = ['5 start','sea food']
  //  restaurentData = [  {  tags : ['sea food', '7 star']   } ]

  // logic for filtering tags
  if (filteredTags?.length) {
    restaurentData = restaurentData.filter((eachHotel) => {
      let matchFound = true;
      eachHotel.tags.forEach((tag) => {
        if (filteredTags.includes(tag)) {
          matchFound = false;
          return;
        }
      });
      return !matchFound;
    });
  }

  // const callback = (a, b) => {
  //   const firstHotel = Number(a.ratings);
  //   const secondHotel = Number(b.ratings);
  //   if (firstHotel > secondHotel) {
  //     return -1;
  //   }
  //   if (firstHotel < secondHotel) {
  //     return 1;
  //   }
  // };

  // const callbackPriceHL = (a, b) => {
  //   const firstHotel = Number(a.price);
  //   const secondHotel = Number(b.price);

  //   if (firstHotel > secondHotel) {
  //     return -1;
  //   }
  //   return 1;
  // };

  // const callbackPriceLH = (a, b) => {
  //   const firstHotel = Number(a.price);
  //   const secondHotel = Number(b.price);

  //   if (firstHotel > secondHotel) {
  //     return 1;
  //   }
  //   return -1;
  // };

  // // logic for sorting
  // if (selectedSort?.length) {
  //   if (selectedSort === "Ratings") {
  //     restaurentData.sort((a, b) => callback(a, b));
  //   }
  //   if (selectedSort === "Price High to Low") {
  //     restaurentData.sort((a, b) => callbackPriceHL(a, b));
  //   }
  //   if (selectedSort === "Price Low to High") {
  //     restaurentData.sort((a, b) => callbackPriceLH(a, b));
  //   }
  // }

  const callback = (a, b, type) => {
    let reverse = true;
    if (type === "Price Low to High" || type === "Price High to Low") {
      if (type === "Price Low to High") reverse = false;
      type = "price";
    }
    const firstHotel = Number(a[type.toLowerCase()]);
    const secondHotel = Number(b[type.toLowerCase()]);

    if (firstHotel > secondHotel) {
      return reverse ? -1 : 1;
    }
    return reverse ? 1 : -1;
  };

  if (selectedSort?.length) {
    restaurentData.sort((a, b) => callback(a, b, selectedSort));
  }


  

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
