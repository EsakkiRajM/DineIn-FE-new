import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Chip, Grid } from "@mui/material";

export default function TimeSlot({ onTimeClick, selectedTime }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const chipdata = {
    morning: [
      { key: 0, label: "9 AM - 10 AM" },
      { key: 1, label: "10 AM - 11 AM" },
      { key: 2, label: "11 AM - 12 AM" },
    ],
    afternoon: [
      { key: 3, label: "12 PM - 1 PM" },
      { key: 4, label: "1 PM - 2 PM" },
    ],
    dinner: [
      { key: 5, label: "6 PM - 7 PM" },
      { key: 6, label: "7 PM - 8 PM" },
      { key: 7, label: "8 PM - 9 PM" },
      { key: 8, label: "9 PM - 10 PM" },
      { key: 9, label: "10 PM - 11 PM" },
    ],
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Morning" value="1" />
            <Tab label="After Noon" value="2" />
            <Tab label="Dinner" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"center"}
            overflow={"auto"}
            spacing={3}
            maxWidth={300}
            minHeight={150}
          >
            {chipdata.morning.map((eachSlot) => {
              return (
                <Grid key={eachSlot.key} item>
                  <Chip
                    color={
                      selectedTime === eachSlot.label ? "success" : "default"
                    }
                    label={eachSlot.label}
                    onClick={() => {
                      onTimeClick(eachSlot.label);
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid
            container
            spacing={3}
            flexDirection={"row"}
            justifyContent={"center"}
            overflow={"auto"}
            maxWidth={300}
            minHeight={150}
          >
            {chipdata.afternoon.map((eachSlot) => {
              return (
                <Grid key={eachSlot.key} item>
                  <Chip
                    color={
                      selectedTime === eachSlot.label ? "success" : "default"
                    }
                    label={eachSlot.label}
                    onClick={() => {
                      onTimeClick(eachSlot.label);
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
        <TabPanel value="3">
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"center"}
            overflow={"auto"}
            spacing={3}
            maxWidth={300}
            minHeight={150}
          >
            {chipdata.dinner.map((eachSlot) => {
              return (
                <Grid key={eachSlot.key} item>
                  <Chip
                    color={
                      selectedTime === eachSlot.label ? "success" : "default"
                    }
                    label={eachSlot.label}
                    onClick={() => {
                      onTimeClick(eachSlot.label);
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
