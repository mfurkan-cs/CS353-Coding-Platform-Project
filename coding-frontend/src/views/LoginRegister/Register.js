import React, { useState } from "react";
import { TextField, InputAdornment, Grid, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import BadgeIcon from "@mui/icons-material/Badge";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Colors from "../../utils/Colors";

const Register = () => {
  const [isEditor, setIsEditor] = useState(false);
  return (
    <Grid
      container
      style={{
        marginLeft: "13%",
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          marginTop: "13%",
          fontSize: "1.4rem",
          fontWeight: "bold",
          color: Colors.primary_color,
        }}
      >
        Register
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Full Name"
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Email"
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Nickname"
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TagFacesIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Password"
          type="password"
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Birthday"
          type={"datetime-local"}
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarTodayIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>
      {isEditor && (
        <Grid item xs={12} style={{ marginTop: "3%" }}>
          Click here to upload your CV
          <input
            id="file-upload"
            type={"file"}
            style={{ paddingLeft: "10px" }}
          />
        </Grid>
      )}
      <Grid item xs={4} style={{ marginTop: "3%" }}>
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: Colors.primary_color }}
        >
          Register
        </Button>
      </Grid>
      <Grid item xs={8} style={{ marginTop: "3%" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isEditor}
              onChange={() => setIsEditor(!isEditor)}
            />
          }
          label="I want to be an editor"
        />
      </Grid>
    </Grid>
  );
};

export default Register;
