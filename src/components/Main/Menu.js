  import React, { useState } from "react";
import "./css/Menu.css";
import mylogo from "./img/logo2.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ModalLogin from "./Modal/ModalLogin";
import cancela from "./img/cancela.svg";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InputAdornment from '@material-ui/core/InputAdornment';
import { scroller } from "react-scroll";


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
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const scrollToBottom = () =>{
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
  const scrollToCenter = () =>{
    console.log(document.documentElement.scrollHeight/2);
    window.scrollTo({
      top: document.documentElement.scrollHeight/3,
      behavior: 'smooth'
    });
  };

  function HandleCloselogin(){
    SetLogin(false);
  }
  function HandleCloseSignUp(){
    SetSignUp(false);
  }
  function SignUpPopUp(){
    SetLogin(false);
    SetSignUp(true);
  }
  function LoginPopUp(){
    SetSignUp(false);
    SetLogin(true);
  }
  return (
    <nav className="poss">
      <div className="myMenu">
        <a className="pil pil_push" href="/">
          <img className="mylog" src={mylogo} width="80px" alt="" />
        </a>

        <div className="" id="navbarNav">
          <ul className="">
            <li className="">
              <Link className="pil" to="/">
                Home
              </Link>
            </li>
            <li className="">
              <a className="pil" onClick={scrollToCenter}>
                Annonces
              </a>
            </li>
            <li className="">
              <a className="pil"  onClick={scrollToBottom}>
                About us
              </a>
            </li>
            <li className="">
              <a className="pil" href="/Dashboard">
                Dashboard
              </a>
            </li>
            <li className="">
              <a className="pil" href="/Profil">
                Profil
              </a>
            </li>
            <li className="Speciall">
              <button className="pil mycadr" onClick={LoginPopUp}>
                Se connecter
              </button>
            </li>

            <li>
              <a className="pil mycadr" href="/PublierAnnonce">
                <div className="moncadr">
                  <p className="contentCadr">Publier annonce</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    <Dialog style={{marginLeft:'0%'}} fullWidth={false}  open={Login} onClose={HandleCloselogin} aria-labelledby="form-dialog-title" >
      <DialogTitle id="form-dialog-title"><h3><b>Login Your Account</b></h3>
      <h6>Thank you for get back to Finderland System, let access our the best recommendation for you.</h6></DialogTitle>
      <DialogContent>
      <div style={{display:'block'}}>
      <div>
        <TextField label="Login" width='50%' style={{marginBottom:"35px",width:'100%'}}
            InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon  /> </InputAdornment> ), }}
        /><br/>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input style={{marginBottom:"35px",width:'100%'}} id="standard-adornment-password" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>}
        /><br/><br/>
        <Button  className='' variant="contained"style={{color:'white',backgroundColor:'#005bb1',width:'100%',height:'40px',marginLeft:'0%'}} startIcon={<ArrowForwardIosIcon />}>
          Sign Up
        </Button>
      </div><br/>
      <h6>Don't have an account yet? <label className='joinNow' onClick={SignUpPopUp}><b>Join Now</b></label></h6>
      </div>
      </DialogContent>
    </Dialog>

    <Dialog style={{marginLeft:'0%'}} fullWidth={false}  open={SignUp} onClose={HandleCloseSignUp} aria-labelledby="form-dialog-title" >
      <DialogTitle id="form-dialog-title"><h3><b>Register New Account</b></h3>
      <h6>Let's get you all set up so you can verify your personal account and begin setting up your profile.</h6></DialogTitle>
      <DialogContent>
      <div style={{display:'block'}}>
      <div>
        <TextField label="First Name" width='50%' style={{margin:"0 0 7%  0px"}} InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon  /> </InputAdornment> ), }}/>
        <TextField label="Last Name" width='50%' style={{margin:"0 0 7%  13%"}} InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon  /> </InputAdornment> ), }}/>

        <TextField label="Adresse" width='50%' style={{margin:"0 0 7%  0%"}} InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon  /> </InputAdornment> ), }}/>
        <TextField label="Phone Number" width='50%' style={{margin:"0 0 7%  13%"}} InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon  /> </InputAdornment> ), }}/>

        <div style={{display:'flex'}}>
        <TextField label="Mail" width='50%' style={{margin:"1% 0 7%  0%"}} InputProps={{ startAdornment: ( <InputAdornment position="start"> <PersonIcon  /> </InputAdornment> ), }}/>
        <div style={{margin:"0 0 7%  13%"}}>
        <InputLabel htmlFor="standard-adornment-password" style={{fontSize:'12px'}} >Password</InputLabel>
          <Input style={{marginBottom:"35px"}} id="standard-adornment-password" type={values.showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>}
        />
        </div>
        </div>
        <Button variant="contained" style={{background:'#005bb1', color:'white',width:'100%',height:'40px',marginLeft:'0%'}} startIcon={<ArrowForwardIosIcon />}>
          Create Account
        </Button>
      </div><br/>
      <h6>Already have an account?<label className='joinNow' onClick={LoginPopUp}><b>Sign In</b></label></h6>

      </div>
      </DialogContent>
    </Dialog>
    </nav>
  );
}

export default Menu;
