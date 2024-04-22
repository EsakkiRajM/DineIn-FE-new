import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";

import {
  Grid,
  AppBar,
  Autocomplete,
  TextField,
  InputAdornment,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function LoginModal({ openType, setOpenType }) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
    emailaddress: "",
    age: 0,
  });

  const handleSubmit = () => {
    if (openType === "login") {
      // alert("login");
    } else {
      // alert("Register");
    }
  };

  return (
    <React.Fragment>
      <Modal open={openType} onClose={() => setOpenType("")}>
        <ModalDialog
          minWidth={600}
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only("xs")]: {
              top: "unset",
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: "none",
            },
          })}
        >
          <Typography textAlign={"center"} id="nested-modal-title" level="h2">
            {openType === "login" ? `Login` : "Register"}
          </Typography>

          <Grid container flexDirection={"column"} spacing={5}>
            <Grid item>
              <TextField
                label="Username"
                id="username"
                name="username"
                variant="standard"
                fullWidth
                onChange={(event) => {
                  console.log(event.target.value);
                  setFormState({
                    ...formState,
                    username: event.target.value,
                    // confirmpassword: formState.confirmpassword,
                    // password: formState.password,
                    // phonenumber: formState.phonenumber,
                    // emailaddress: formState.emailaddress,
                  });
                }}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Password"
                id="password"
                name="password"
                variant="standard"
                fullWidth
                onChange={(event) => {
                  setFormState({
                    ...formState,
                    password: event.target.value,
                  });
                }}
              />
            </Grid>

            {openType === "register" && (
              <>
                <Grid item>
                  <TextField
                    label="Confirm Password"
                    id="confirmpassword"
                    name="confirmpassword"
                    variant="standard"
                    fullWidth
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        confirmpassword: event.target.value,
                      });
                    }}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    label="Phone Number"
                    id="phonenumber"
                    name="phonenumber"
                    variant="standard"
                    fullWidth
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        phonenumber: event.target.value,
                      });
                    }}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    label="Email Address"
                    id="emailaddress"
                    name="emailaddress"
                    variant="standard"
                    fullWidth
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        emailaddress: event.target.value,
                      });
                    }}
                  />
                </Grid>
              </>
            )}
          </Grid>

          <Box
            sx={{
              mt: 5,
              display: "flex",
              gap: 1,
              flexDirection: { xs: "column", sm: "row-reverse" },
              justifyContent: "center",
            }}
          >
            <Button
              variant="solid"
              color="primary"
              onClick={() => handleSubmit()}
            >
              {openType === "login" ? `Login` : "Register"}
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setOpenType("")}
            >
              Cancel
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

// Login Modal

// 1. username
// 2. password

// registration

// 1. username
// 2. password
// 3. confirmation password
// 4. phone number
// 5. email address
