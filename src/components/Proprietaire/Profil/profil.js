import React, { useState,useEffect} from "react";
import Axios from 'axios'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../css/Profil.css";
import NavBar from "../../navBar";
import BarChartIcon from "@mui/icons-material/BarChart";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@material-ui/core/TextField";
import ReactPaginate from "react-paginate";
import RoomIcon from "@mui/icons-material/Room";
import Avatar from "@mui/material/Avatar";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import { pink } from "@mui/material/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from '@mui/material/InputAdornment';
import MoneyIcon from '@mui/icons-material/Money';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  button: { margin: theme.spacing(1) },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function Profil() {
  const [userprofile, setUserprofile] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
  );
  const [Info, setInfo] = useState([]);
  const [page, setPage] = React.useState(0);
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(0);
  const [pageNumberImg, setPageNumberImg] = useState(0);
  const usersPerPage = 2;
  const usersPerPageImgs = 3;
  const [IndexImg, SetIndexImg] = useState(0);
  const pagesVisited = pageNumber * usersPerPage;
  const pagesVisitedImsg = pageNumberImg * usersPerPageImgs;


  const [EditIndex, SetEditIndex] = useState(0);
  const [Cards, SetCards] = useState([]);
  const [UserInfo, SetUserInfo] = useState([]);


  const [ImgsArray, SetImgsArray] = useState([]);

    const [Imgs, SetImgs] = useState([{
        img: require("../../img/appt1.jpg").default,key: "1",
      },{
        img: require("../../img/appt2.jpg").default,key: "2",
      },{
        img: require("../../img/appt3.jpeg").default,key: "3",
      },{
        img: require("../../img/appt4.jpg").default,key: "4",
      },]);

  const pageCount = Math.ceil(Cards.length / usersPerPage);
  const pageCountImgs = Math.ceil(Imgs.length / usersPerPageImgs);

  const [EditAnnonceDialog, SetEditAnnonceDialog] = useState(false);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const changePageImg = ({ selected }) => {
    setPageNumberImg(selected);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function HandleCloseEditAnnonceDialog() {
    SetEditAnnonceDialog(false);
  }

  function EditAnnonce(index){
    SetEditIndex(index);
    SetEditAnnonceDialog(true);
  }
  function DeleteAnnonce(index){
    console.log(Cards[index].id);
  }
  // function changeInfo(value){
  //   console.log(Cards[EditIndex]);
  //   console.log(value);
  // }

  function imageHandler(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserprofile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  function showImage(index){
    console.log(index);
    SetIndexImg(index);
  }

  function SaveEdit(){
    console.log(Cards[EditIndex]);
  }

  const ImgsAnnonce = Imgs.slice(
    pagesVisitedImsg,
    pagesVisitedImsg + usersPerPageImgs
  ).map((val, index, i = 0) => {
    return (
      <div className="" key={index} style={{ display: "flex"}}>
        <img onClick={()=>showImage(index)} style={{ padding:'8px',borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px", }} src={Imgs[0].img} alt="house" height="70px" width="95px" />
      </div>
    );
  });


  const displayUsers = Cards.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((val, index, i = 0) => {
    return (
      <div className="" key={index} style={{ display: "flex" }}>
        <div className="">
          <img style={{ borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px", }} src={Imgs[0].img} alt="house" height="220px" width="300px" />
        </div>
        <div style={{ backgroundColor: "white", width: "100%", height: "max-content", minHeight: "220px", minHeight: "220px", border: "2px dotted #e0e1e5 ", borderLeft: "none", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", padding: "12px", }} >
          <h2 style={{ textAlign: "left", fontSize: "1.375rem", marginBottom: "1em", fontFamily: "Lato", marginBottom: "12px", fontWeight: "600", color: "rgb(53, 53, 53)", }} >
            <b>{val.titre}</b>
          </h2>
          <p style={{ textAlign: "start", color: "#666", marginRight: "8px" }}> {val.description} </p>
          <div style={{ display: "flex", float: "right" }}>
            <div style={{ display: "flex", marginRight: "5%", width: "120px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BathroomOutlinedIcon /> </Avatar>
              {val.salleDeBain} bath
            </div>
            <div style={{ display: "flex", marginRight: "5%", width: "120px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BedOutlinedIcon /> </Avatar>
              {val.chambre} rooms
            </div>
            <div style={{ display: "flex", width: "120px" }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BorderAllIcon /> </Avatar>
              {val.surface} m²
            </div>
          </div>
          <br />
          <div style={{ textAlign: "start", maxWidth: "300px" }}>
            <div style={{ color: "#666" }}>
              <RoomIcon style={{ fontSize: "19px" }} />
              <b>{val.adresse}</b>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#666", marginTop: "4px" }}>
              {" "}
              <strong>
                Prix :<b>{val.prix} MAD</b>{" "}
              </strong>{" "}
            </div>
            <div>
              <Button onClick={()=>EditAnnonce(index)} variant="contained" size="small" style={{ borderRadius: "10px", marginRight: "10px", backgroundColor: "#679436", color: "white", }} > Modify </Button>
              <Button onClick={()=>DeleteAnnonce(index)} variant="contained" size="small" style={{ borderRadius: "10px", backgroundColor: "red", color: "white", }} > Delete </Button>
            </div>
          </div>
        </div>

        <Dialog maxWidth={'xl'} fullWidth={false} open={EditAnnonceDialog} onClose={HandleCloseEditAnnonceDialog} aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title">
            <h3><b>Modifier Annonce</b></h3>
            <label style={{ color: "#666",fontSize:'15px' }}>Modifier les informations de vote annoces si vous l'avez mal ajouté.</label>

          </DialogTitle>
          <DialogContent>
            <div style={{ display: "flex" }}>
              <div>
                <div>
                  <Fab className='deleteImg' size="small" >
                    <CloseIcon />
                  </Fab>
                  <img style={{ borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px", }} src={Imgs[IndexImg].img} alt="house" height="220px" width="300px" />
                </div>
                <div>

                <div style={{ width: "100%", margin: "2% 3% 5% 0" }}>
                  <div className="rowa" >
                    <div style={{  display: "flex"}}>{ImgsAnnonce}</div>

                    <ReactPaginate style={{color:'red'}}
                      previousLabel={<KeyboardArrowLeftIcon  fontSize="large " />}
                      nextLabel={<KeyboardArrowRightIcon  fontSize="large" />}
                      pageSize={1}
                      pageCount={pageCountImgs}
                      onPageChange={changePageImg}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>
                </div>

                </div>
              </div>
              <div style={{padding:'0% 2%'}}>
                <TextField onChange={e=>Cards[EditIndex].titre=e.target.value} inputProps={{style: {fontSize: '1.375rem',fontWeight:'600',}}} id="outlined-basic" fontSize='150' label="Titre" fullWidth defaultValue={Cards[EditIndex].titre} variant="outlined" />
                <TextField onChange={e=>Cards[EditIndex].description=e.target.value} style={{marginTop:'12px'}} id="outlined-basic" multiline fontSize='150' label="description" fullWidth defaultValue={Cards[EditIndex].description} variant="outlined" />
                <div style={{ display: "flex", float: "right" }}>
                  <div style={{ display: "flex", marginRight: "5%", width: "120px",marginTop:'12px' }}>
                    <TextField onChange={e=>Cards[EditIndex].salleDeBain=e.target.value} label="bath" defaultValue={Cards[EditIndex].salleDeBain} InputProps={{ startAdornment: ( <InputAdornment position="start"> <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BathroomOutlinedIcon /></Avatar> </InputAdornment> ), }} variant="outlined" />
                  </div>
                  <div style={{ display: "flex", marginRight: "5%", width: "120px",marginTop:'12px' }}>
                    <TextField onChange={e=>Cards[EditIndex].chambre=e.target.value} label="rooms" defaultValue={Cards[EditIndex].chambre} InputProps={{ startAdornment: ( <InputAdornment position="start"> <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BedOutlinedIcon /></Avatar> </InputAdornment> ), }} variant="outlined" />
                  </div>
                  <div style={{ display: "flex", width: "120px",marginTop:'12px' }}>
                    <TextField onChange={e=>Cards[EditIndex].surface=e.target.value} label="surface m²" defaultValue={Cards[EditIndex].surface} InputProps={{ startAdornment: ( <InputAdornment position="start"> <Avatar sx={{ width: 24, height: 24, bgcolor: "#05668d", marginRight: 1, }} variant="rounded" > <BorderAllIcon /></Avatar> </InputAdornment> ), }} variant="outlined" />
                  </div>
                </div>

                <br />
                <div style={{ textAlign: "start", maxWidth: "300px",marginTop:'12px' }}>
                  <TextField onChange={e=>Cards[EditIndex].adresse=e.target.value} id="input-with-icon-textfield" label="Adresse" defaultValue={Cards[EditIndex].adresse} InputProps={{ startAdornment: ( <InputAdornment position="start"> <RoomIcon /> </InputAdornment> ), }} variant="outlined" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" ,marginTop:'12px'}}>
                  <TextField onChange={e=>Cards[EditIndex].adresse=e.target.value} id="input-with-icon-textfield" label="Prix (MAD)" type='number' defaultValue={Cards[EditIndex].prix} InputProps={{ startAdornment: ( <InputAdornment position="start"> <MoneyIcon /> </InputAdornment> ), }} variant="outlined" />
                  <Button onClick={SaveEdit} variant="contained" size="small" style={{ borderRadius: "10px",marginTop:'2%', backgroundColor: "#05668d", color: "white", }} > Save </Button>
                </div>

              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  });

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/proprietaire/prop/id/1")
        .then((reponse)=> {
          SetUserInfo(reponse.data)
        })
  },[])

  useEffect(()=>{
      Axios.get("http://127.0.0.1:8040/annonce/ap/prop/1")
        .then((reponse)=> {
          console.log(reponse.data);
          SetCards(reponse.data)

          // let content = reponse.data.map(key => {
          //   Axios.get("http://127.0.0.1:8040/photo/ap/annonce/"+key.id)
          //   .then((response)=> {
          //     // arr.push("reponse.data");
          //   })
          // });
          // console.log(arr);
        })
  },[])



  return (
    <div className="App">
      <div style={{ width: "100%" }}>
        <NavBar />
        <div className="Paper1">
          <div className="TitlePaper">
            Dashboard
            <br />
            <label className="TitlePaper2">
              Dashboard/Statistiques Utilisateurs
            </label>
          </div>
          <BarChartIcon style={{ fontSize: "30px" }} />
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{ width: "35%", padding: "0 16", margin: "10px 2% 10px 4%" }}
          >
            <div className="ProfilImg">
              <img src={userprofile} style={{ borderRadius: "7%", width: "150px" }} alt="" />
            </div>
            <div className="nameProfil">
              <span>{Info.nom}</span> <br />
              <input type="file" name="file" id="file" className="inputfile" accept="image/*" onChange={imageHandler} />
              <center>
                <Fab htmlFor="file" className="" size="small">
                  <label style={{ padding: "5% 0 0 10px ", borderRadius: "10px", width: "100%", height: "100%", backgroundColor: "transparent", }} htmlFor="file" className="profil_changee" >
                    <EditIcon />
                  </label>
                </Fab>
              </center>
            </div>
            <div style={{ padding: "0%", height: "30%" }}>
              <TextField value={UserInfo.firstName || ""} label="First Name"  size="small" style={{ width: "43%", margin: "10% 0 0 0" }}  variant="outlined" />
              <TextField value={UserInfo.lastName || ""} size="small" style={{ width: "43%", margin: "10% 0 0 10%" }} id="outlined-basic" label="Last Name" variant="outlined" />
              <TextField value={UserInfo.email|| ""} size="small" style={{ width: "96%", margin: "7% 0 0 0%" }} id="outlined-basic" label="Mail" variant="outlined" />
              <TextField value={UserInfo.adresse|| ""} size="small" style={{ width: "96%", margin: "7% 0 0 0%" }} id="outlined-basic" label="Adresse" variant="outlined" />
              <TextField value={UserInfo.numTel|| ""} size="small" style={{ width: "96%", margin: "7% 0 0 0%" }} id="outlined-basic" label="Phone Number" variant="outlined" />
              <Button  variant="contained" size="small" style={{ borderRadius: "10px", marginRight: "10px", backgroundColor: "#05668d", color: "white", }} > Save Modification </Button>

            </div>
          </div>
          <div style={{ width: "100%", margin: "2% 3% 5% 0" }}>
            <div className="rowa" style={{ height: "100% , margin: 10px" }}>
              {displayUsers}
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default Profil;
