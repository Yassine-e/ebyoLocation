import React, { useState } from "react";
import NavVertical from "./navVertical";
import Button from "@material-ui/core/Button";
import NavBar from "./navBar";
import ReactPaginate from "react-paginate";
import Avatar from "@mui/material/Avatar";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ElderlyIcon from "@mui/icons-material/Elderly";
import PostAddIcon from "@mui/icons-material/PostAdd";
import "./css/Propritaires.css";
function Propritaires() {
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const [Cards /*SetCards*/] = useState([
    {
      Prenom: "Yassine",
      Nom: "Achari",
      age: "21",
      email: "aacharidzab@gmail.com",
      numTel: "0653169424",
      Password: "AcchariLoco",
      adresse: "Sale",
      annonce: "5",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      key: "1",
    },
    {
      Prenom: "Tarik",
      Nom: "Eloud",
      age: "23",
      email: "Totok@gmail.com",
      numTel: "061296632",
      Password: "Tariko562",
      adresse: "Rabat",
      annonce: "4",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      key: "2",
    },
    {
      Prenom: "Oussama",
      Nom: "El Merroun",
      age: "23",
      email: "ousmar@gmail.com",
      numTel: "066893632",
      Password: "Ousmar",
      adresse: "Tétouan",
      annonce: "10",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      key: "3",
    },
    {
      Prenom: "Amine",
      Nom: "El Alaoui",
      age: "22",
      email: "AmineElala@gmail.com",
      numTel: "0634135569",
      Password: "Aminnne",
      adresse: "Tétouan",
      annonce: "16",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      key: "4",
    },
    {
      Prenom: "Mohamed",
      Nom: "Benchlikha",
      age: "25",
      email: "MedBen@gmail.com",
      numTel: "0634135569",
      Password: "Medban",
      adresse: "Ouazzan",
      annonce: "15",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      key: "4",
    },
    {
      Prenom: "Asmae",
      Nom: "Saaidda",
      age: "22",
      email: "ssmma@gmail.com",
      numTel: "0662735569",
      Password: "Asmff552",
      adresse: "Casablanca",
      annonce: "7",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      key: "5",
    },
  ]);
  const pageCount = Math.ceil(Cards.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  {
    /* const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };*/
  }
  const displayUsers = Cards.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((val, indexa, i = 0) => {
    return (
      <div className="" key={indexa} style={{ display: "flex", padding: "2%" }}>
        <div className="">
          <img
            style={{
              borderBottomLeftRadius: "5px",
              borderTopLeftRadius: "5px",
            }}
            src={val.img}
            alt="house"
            height="150px"
            width="150px"
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "max-content",
            border: "2px dotted #e0e1e5 ",
            borderLeft: "none",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            padding: "12px",
            paddingTop: "2px",
            paddingBottom: "5px",
          }}
        >
          <h2
            style={{
              textAlign: "left",
              fontSize: "1.375rem",
              fontFamily: "Lato",
              fontWeight: "600",
              color: "rgb(53, 53, 53)",
            }}
          >
            <b>
              {val.Prenom}
              {val.Nom}
            </b>
          </h2>

          <div style={{ display: "flex", float: "right" }}>
            <div style={{ display: "flex", marginRight: "5%", width: "200px" }}>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: "#05668d",
                  marginRight: 1,
                }}
                variant="rounded"
              >
                <AlternateEmailIcon />
              </Avatar>
              {val.email}
            </div>
            <div style={{ display: "flex", marginRight: "5%", width: "120px" }}>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: "#05668d",
                  marginRight: 1,
                }}
                variant="rounded"
              >
                <ElderlyIcon />
              </Avatar>
              {val.age} ans
            </div>
            <div style={{ display: "flex", width: "170px" }}>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: "#05668d",
                  marginRight: 1,
                }}
                variant="rounded"
              >
                <PostAddIcon />
              </Avatar>
              {val.annonce} Annonces
            </div>
          </div>
          <div style={{ textAlign: "start", maxWidth: "300px" }}>
            <panel style={{ color: "#666" }}>
              <b>Adresse: {val.adresse}</b>
            </panel>
          </div>
          <div>
            <div
              style={{
                textAlign: "start",
                color: "#666",
                marginTop: "4px",
              }}
            >
              <strong>
                Id : <b>3445342</b>{" "}
              </strong>{" "}
              <br />
              <strong>
                Password : <b>{val.Password}</b>{" "}
              </strong>{" "}
            </div>

            <Button
              variant="contained"
              size="small"
              style={{
                borderRadius: "10px",
                backgroundColor: "red",
                color: "white",
                float: "right",
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="App" style={{ display: "flex" }}>
      <NavVertical />
      <div style={{ width: "100%" }}>
        <NavBar />
        <div class="container">
          <div class="row height d-flex justify-content-center align-items-center">
            <div class="col-md-8">
              <div class="search">
                {" "}
                <i class="fa fa-search"></i>{" "}
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recherche des utilisateurs"
                />{" "}
                <button class="btn btn-primary">Search</button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mycontent">{displayUsers}</div>
        <div style={{ width: "100%", margin: "2% 3% 5% 0" }}>
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
  );
}

export default Propritaires;
