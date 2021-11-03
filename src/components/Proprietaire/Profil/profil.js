import React, { useState,Fragment,useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../css/Profil.css'
import NavVertical from '../../navVertical'
import NavBar from '../../navBar'
import Title from '../../dashboard/title'
import Dashboard from "../../dashboard/dashboard";
import BarChartIcon from '@mui/icons-material/BarChart';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import ReactPaginate from 'react-paginate'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import RoomIcon from '@mui/icons-material/Room';
import Avatar from '@mui/material/Avatar';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import { green, pink } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
  button: { margin: theme.spacing(1),},
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

function Profil() {
  const [userprofile , setUserprofile] = useState('https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png')
  const [Info,setInfo]=useState([]);
  const [page, setPage] = React.useState(0);
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;
  const [Cards,SetCards]=useState([
    { title:'Appartement en Location wilaya',prix:'1600',bath:'1',rooms:'3',surface:'100',adresse:'Sale',img:require('../../img/appt1.jpg').default,key:'1' },
    { title:'Appartement en Location (Par Mois) à Tétouan',prix:'1200',bath:'1',rooms:'2',surface:'80',adresse:'Rabat',img:require('../../img/appt2.jpg').default,key:'2' },
    { title:'Appart vide non meuble',prix:'1000',bath:'1',rooms:'2',surface:'50',adresse:'App2 Res France, Mhanech, Tetouan',img:require('../../img/appt3.jpeg').default,key:'3' },
    { title:'Appartement meublée ',prix:'3000',bath:'2',rooms:'4',surface:'120',adresse:'Tetouan',img:require('../../img/appt4.jpg').default,key:'4' },
  ]);
  const pageCount = Math.ceil(Cards.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  function imageHandler(e){
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setUserprofile(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
// <img src={require('path/to/one.jpeg')} />
// src={ImgAppt}
  const displayUsers = Cards
.slice(pagesVisited, pagesVisited + usersPerPage)
.map((val,index,i=0) => {
  return (
      <div className="" key={index} style={{display:'flex',padding:'2%'}}>
        <div className="" ><img style={{borderBottomLeftRadius:'10px',borderTopLeftRadius:'10px'}} src={val.img} alt="house" height="170px" width="300px" /></div>
        <div style={{backgroundColor:'white',width:'100%',height:"170px",borderBottomRightRadius:'10px',borderTopRightRadius:'10px',}}>
          <h6 style={{textAlign:'start',margin:'10px 0 0 17px'}}><b>{val.title}</b></h6>
          <h5 style={{textAlign:'end',color:'blue',marginRight:'8px'}}><b>{val.prix} MAD</b></h5>
          <div style={{display:'flex',float:'right'}} >
            <div style={{display:'flex',marginRight:'5%',width:'120px'}} ><Avatar sx={{ width: 24, height: 24,bgcolor: pink[500],marginRight:1 }} variant="rounded"><BathroomOutlinedIcon/></Avatar>{val.bath} bath</div>
            <div style={{display:'flex',marginRight:'5%',width:'120px'}}><Avatar sx={{ width: 24, height: 24,bgcolor: pink[500],marginRight:1  }} variant="rounded"><BedOutlinedIcon/></Avatar>{val.rooms} rooms</div>
            <div style={{display:'flex',width:'120px'}}><Avatar sx={{ width: 24, height: 24,bgcolor: pink[500],marginRight:1  }} variant="rounded"><BorderAllIcon/></Avatar>{val.surface} sqft</div>
          </div><br/>
          <div style={{display: 'flex', justifyContent: 'space-between',padding: '41px 15px 0px 17px'}} >
            <div><panel><RoomIcon style={{fontSize:'17px'}}/><b>{val.adresse}</b></panel></div>
            <div><Button variant="contained" size="small" style={{borderRadius:'10px',backgroundColor:'green',color:'white'}}>View</Button></div>
          </div>
        </div>
      </div>
     );
  }
);

  return (
    <div className="App">
    <div style={{width:'100%'}}>
      <NavBar/>
      <div className="Paper1">
        <div className="TitlePaper" >
          Dashboard<br/>
          <label className="TitlePaper2">Dashboard/Statistiques Utilisateurs</label>
        </div>
        <BarChartIcon style={{fontSize:'30px'}}/>
      </div>

      <div style={{display:'flex',backgroundColor:'#f3f6fa'}}>
        <div style={{width:'35%',padding:'0 16',margin:'10px 2% 10px 4%'}}>
          <div className='ProfilImg'>
            <img src={userprofile} style={{borderRadius: "7%",width:'150px'}} alt=''  />
          </div>
          <div className='nameProfil' >
            <span>{Info.nom}</span> <br/>
            <input type="file" name="file" id="file" className="inputfile" accept="image/*" onChange={imageHandler} />
            <center><Fab htmlFor="file" className='' size="small">
              <label style={{padding:'5% 0 0 10px ',borderRadius:'10px',width:'100%',height:'100%',backgroundColor:'transparent'}} htmlFor="file" className='profil_changee'><EditIcon/></label>
            </Fab></center>
          </div>
          <div style={{padding:'0%',height:'30%'}}>
            <TextField size="small" style={{width:'43%',margin:'10% 0 0 0'}} id="outlined-basic" label="First Name" variant="outlined" />
            <TextField size="small" style={{width:'43%',margin:'10% 0 0 10%'}} id="outlined-basic" label="Last Name" variant="outlined" />
            <TextField size="small" style={{width:'96%',margin:'7% 0 0 0%'}} id="outlined-basic" label="Mail" variant="outlined" />
            <TextField size="small" style={{width:'96%',margin:'7% 0 0 0%'}} id="outlined-basic" label="Adresse" variant="outlined" />
            <TextField size="small" style={{width:'96%',margin:'7% 0 0 0%'}} id="outlined-basic" label="Phone Number" variant="outlined" />
          </div>
        </div>
        <div style={{width:"100%",margin:'2% 3% 0 0'}}>
        <div className="rowa" style={{height:'100%'}}>
          {displayUsers}
          <ReactPaginate previousLabel={"Previous"} nextLabel={"Next"} pageCount={pageCount} onPageChange={changePage}
          containerClassName={"paginationBttns"} previousLinkClassName={"previousBttn"} nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"} activeClassName={"paginationActive"}/>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profil;
