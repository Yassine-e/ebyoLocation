import React, { useState } from "react";
import "./css/Menu.css";
import mylogo from "./img/logo2.png";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import InputAdornment from "@material-ui/core/InputAdornment";

function Menu() {
  const [Login, SetLogin] = useState(false);
  const [SignUp, SetSignUp] = useState(false);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const scrollToCenter = () => {
    console.log(document.documentElement.scrollHeight / 2);
    window.scrollTo({
      top: document.documentElement.scrollHeight / 3,
      behavior: "smooth",
    });
  };

  function HandleCloselogin() {
    SetLogin(false);
  }
  function HandleCloseSignUp() {
    SetSignUp(false);
  }
  function SignUpPopUp() {
    SetLogin(false);
    SetSignUp(true);
  }
  function LoginPopUp() {
    SetSignUp(false);
    SetLogin(true);
  }

  return (
    <nav className="poss">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="firstdevis">
            <a className="" href="/">
              <img className="mylog " src={mylogo} width="63px" alt="" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 seconddevis"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="pil pila" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="pil pila" onClick={scrollToCenter}>
                Annonces
              </Nav.Link>

              <Nav.Link className="pil pila" onClick={scrollToBottom}>
                About Us
              </Nav.Link>
              <Nav.Link className="pil pila" href="/Profil">
                Profile
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Nav.Link className="pil  pilaouch" onClick={LoginPopUp}>
                <div className="mycadr">Se connecter</div>
              </Nav.Link>
              <Nav.Link className="pil mycadr" href="/PublierAnnonce">
                <div className="moncadra">
                  <p className="">Publier annonce</p>
                </div>
              </Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
      <Dialog
        style={{
          marginLeft: "30%",
          maxWidth: "500px",
        }}
        open={Login}
        onClose={HandleCloselogin}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <h3>
            <b>Login Your Account</b>
          </h3>
          <h6 style={{ color: "#666" }}>
            Thank you for get back to Finderland System, let access our the best
            recommendation for you.
          </h6>
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "block" }}>
            <div>
              <TextField
                label="Login"
                width="50%"
                style={{ marginBottom: "35px", width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <PersonIcon />{" "}
                    </InputAdornment>
                  ),
                }}
              />
              <br />
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                style={{ marginBottom: "35px", width: "100%" }}
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <br />
              <br />
              <Button
                className=""
                variant="contained"
                style={{
                  color: "white",
                  backgroundColor: "#679436",
                  width: "100%",
                  height: "40px",
                  marginLeft: "0%",
                }}
                startIcon={<ArrowForwardIosIcon />}
              >
                Sign Up
              </Button>
            </div>
            <br />
            <h6>
              Don't have an account yet?{" "}
              <label className="joinNow" onClick={SignUpPopUp}>
                <b style={{ color: "#679436" }}>Join Now</b>
              </label>
            </h6>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog
        style={{ marginLeft: "26%", maxWidth: "600px" }}
        fullWidth={false}
        open={SignUp}
        onClose={HandleCloseSignUp}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <h3>
            <b>Register New Account</b>
          </h3>
          <h6 style={{ color: "#666" }}>
            Let's get you all set up so you can verify your personal account and
            begin setting up your profile.
          </h6>
        </DialogTitle>
        <DialogContent>
          <div style={{ display: "block" }}>
            <div>
              <TextField
                label="First Name"
                width="50%"
                style={{ margin: "0 0 7%  0px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <PersonIcon />{" "}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Last Name"
                width="50%"
                style={{ margin: "0 0 7%  13%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <PersonIcon />{" "}
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Adresse"
                width="50%"
                style={{ margin: "0 0 7%  0%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <PersonIcon />{" "}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Phone Number"
                width="50%"
                style={{ margin: "0 0 7%  13%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <PersonIcon />{" "}
                    </InputAdornment>
                  ),
                }}
              />

              <div style={{ display: "flex" }}>
                <TextField
                  label="Mail"
                  width="50%"
                  style={{ margin: "1% 0 7%  0%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {" "}
                        <PersonIcon />{" "}
                      </InputAdornment>
                    ),
                  }}
                />
                <div style={{ margin: "0 0 7%  13%" }}>
                  <InputLabel
                    htmlFor="standard-adornment-password"
                    style={{ fontSize: "12px" }}
                  >
                    Password
                  </InputLabel>
                  <Input
                    style={{ marginBottom: "35px" }}
                    id="standard-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
              </div>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#05668d",
                  color: "white",
                  width: "100%",
                  height: "40px",
                  marginLeft: "0%",
                }}
                startIcon={<ArrowForwardIosIcon />}
              >
                Create Account
              </Button>
            </div>
            <br />
            <h6 style={{ color: "#666" }}>
              Already have an account?
              <label className="joinNow" onClick={LoginPopUp}>
                <b style={{ color: "#05668d" }}>Sign In</b>
              </label>
            </h6>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}

export default Menu;
