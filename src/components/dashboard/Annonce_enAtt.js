import React, { useState } from "react";
import NavVertical from "./navVertical";
import NavBar from "./navBar";
import Button from "@material-ui/core/Button";
import ReactPaginate from "react-paginate";
import RoomIcon from "@mui/icons-material/Room";
import Avatar from "@mui/material/Avatar";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import BorderAllIcon from "@mui/icons-material/BorderAll";
function Annonce_enAtt() {
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 2;
  const pagesVisited = pageNumber * usersPerPage;
  const [Cards /*SetCards*/] = useState([
    {
      title: "Appartement en Location wilaya",
      prix: "1600",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "1",
      rooms: "3",
      surface: "100",
      adresse: "Sale",
      img: require("../img/appt1.jpg").default,
      key: "1",
    },
    {
      title: "Appartement en Location (Par Mois) à Tétouan",
      prix: "1200",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "1",
      rooms: "2",
      surface: "80",
      adresse: "Rabat",
      img: require("../img/appt2.jpg").default,
      key: "2",
    },
    {
      title: "Appart vide non meuble",
      prix: "1000",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "1",
      rooms: "2",
      surface: "50",
      adresse: "France,Tetouan",
      img: require("../img/appt3.jpeg").default,
      key: "3",
    },
    {
      title: "Appartement meublée ",
      prix: "3000",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "2",
      rooms: "4",
      surface: "120",
      adresse: "Tetouan",
      img: require("../img/appt4.jpg").default,
      key: "4",
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
  const displayannonceAtt = Cards.slice(
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
            height="220px"
            width="300px"
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "max-content",
            minHeight: "220px",
            border: "2px dotted #e0e1e5 ",
            borderLeft: "none",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            padding: "12px",
          }}
        >
          <h2
            style={{
              textAlign: "left",
              fontSize: "1.375rem",
              fontFamily: "Lato",
              marginBottom: "12px",
              fontWeight: "600",
              color: "rgb(53, 53, 53)",
            }}
          >
            <b>{val.title}</b>
          </h2>
          <p style={{ textAlign: "start", color: "#666", marginRight: "8px" }}>
            {val.description}
          </p>
          <div style={{ display: "flex", float: "right" }}>
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
                <BathroomOutlinedIcon />
              </Avatar>
              {val.bath} bath
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
                <BedOutlinedIcon />
              </Avatar>
              {val.rooms} rooms
            </div>
            <div style={{ display: "flex", width: "120px" }}>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: "#05668d",
                  marginRight: 1,
                }}
                variant="rounded"
              >
                <BorderAllIcon />
              </Avatar>
              {val.surface} m2
            </div>
          </div>
          <br />
          <div style={{ textAlign: "start", maxWidth: "300px" }}>
            <panel style={{ color: "#666" }}>
              <RoomIcon style={{ fontSize: "19px" }} />
              <b>{val.adresse}</b>
            </panel>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#666", marginTop: "4px" }}>
              {" "}
              <strong>
                Prix :<b>{val.prix} MAD</b>{" "}
              </strong>{" "}
            </div>
            <div>
              <Button
                variant="contained"
                size="small"
                style={{
                  borderRadius: "10px",
                  marginRight: "10px",
                  backgroundColor: "#679436",
                  color: "white",
                }}
              >
                Accepter
              </Button>
              <Button
                variant="contained"
                size="small"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Refuser
              </Button>
            </div>
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
                  placeholder="Recherche d'annonce"
                />{" "}
                <button class="btn btn-primary">Search</button>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mycontent">{displayannonceAtt}</div>
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

export default Annonce_enAtt;
