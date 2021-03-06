import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Button } from "@mui/material";
import LogRegImage from "../../images/loginregisterimage.jpg";
import Colors from "../../utils/Colors";
import Login from "./Login";
import Register from "./Register";
import RegisterCompany from "./RegisterCompany";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    width: "80vw",
    height: "80vh",
    borderRadius: "10px",
    marginLeft: "10vw",
    marginTop: "10vh",
    boxShadow: "0px 2px 10px rgb(0, 0, 0, 0.1)",
  },
  welcomeText: {
    display: "flex",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    paddingTop: "2%",
    color: Colors.secondary_dark_color,
  },
});

const LoginRegister = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [regType, setRegType] = useState("Login");

  useEffect(() => {
    //if local storage has a user, then redirect to home
    if (localStorage.getItem("session")) {
      if (JSON.parse(localStorage.getItem("session")).person_id !== undefined) {
        if (
          JSON.parse(localStorage.getItem("session")).person_id.charAt(0) ===
          "U"
        ) {
          navigate("/problems");
        } else if (
          JSON.parse(localStorage.getItem("session")).person_id.charAt(0) ===
          "E"
        ) {
          navigate("/editor");
        }
      } else if (
        JSON.parse(localStorage.getItem("session")).company_id !== undefined
      ) {
        navigate("/company");
      } else if (
        JSON.parse(localStorage.getItem("session")).admin_id !== undefined
      ) {
        navigate("/admin");
      }
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.welcomeText}>Welcome to Syncoder</div>
      <Grid container>
        <Grid item xs={6}>
          {regType === "Login" ? (
            <Login />
          ) : regType === "Register" ? (
            <Register />
          ) : regType === "RegisterCompany" ? (
            <RegisterCompany />
          ) : null}
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "8%",
              }}
            >
              <img
                style={{ width: "50%" }}
                src={LogRegImage}
                alt="LoginRegister"
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginTop: "6%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ marginTop: "5.5px" }}>
                {regType === "Login"
                  ? "DON'T"
                  : regType === "Register"
                  ? "ALREADY"
                  : ""}{" "}
                HAVE AN ACCOUNT?
              </div>
              <Button
                style={{
                  color: Colors.secondary_color,
                  backgroundColor: "white",
                }}
                onClick={() => {
                  if (regType === "Login") {
                    setRegType("Register");
                  } else {
                    setRegType("Login");
                  }
                }}
                disableElevation
              >
                {regType === "Login"
                  ? "REGISTER"
                  : regType === "Register" || regType === "RegisterCompany"
                  ? "LOGIN"
                  : ""}
              </Button>
            </Grid>
            {regType === "Register" && (
              <Grid
                item
                xs={12}
                style={{
                  marginTop: "6%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{
                    color: "white",
                    backgroundColor: Colors.secondary_color,
                  }}
                  onClick={() => setRegType("RegisterCompany")}
                  disableElevation
                >
                  Register Company
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginRegister;
