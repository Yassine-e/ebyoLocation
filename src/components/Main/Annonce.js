import React, { useState } from "react";
import "./css/Annonce.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import ReactPaginate from "react-paginate";
import "react-bootstrap";

import imgaa from "./img/imm1.jpeg";
import imma2 from "./img/imma2.jpeg";
import imma3 from "./img/imma3.jpeg";

function Annonce() {
  const [pageNumber, setPageNumber] = useState(0);
  const [MyHight, setHeight] = useState("1350px");
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;
  const [Cards /*SetCards*/] = useState([
    {
      title: "Le Marche Etna House",
      prix: "1600",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "1",
      rooms: "3",
      surface: "100",
      adresse: "Sale",
      img: require("./img/imm1.jpeg").default,
      key: "1",
    },
    {
      title: "Summer Villa Emilia",
      prix: "800",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "1",
      rooms: "2",
      surface: "80",
      adresse: "Rabat",
      img: require("./img/imma2.jpeg").default,
      key: "2",
    },
    {
      title: "Villa Bastilicata Grande",
      prix: "1000",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "1",
      rooms: "2",
      surface: "50",
      adresse: "France,Tetouan",
      img: require("./img/imma3.jpeg").default,
      key: "3",
    },
    {
      title: "Mini villa Espagne",
      prix: "3000",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "2",
      rooms: "4",
      surface: "120",
      adresse: "Tetouan",
      img: require("./img/imma4.jpeg").default,
      key: "4",
    },
    {
      title: "Mini villa Espagne",
      prix: "3000",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "2",
      rooms: "4",
      surface: "120",
      adresse: "Tetouan",
      img: require("./img/imma5.jpeg").default,
      key: "5",
    },
    {
      title: "NEARBY PUBLIC PLACES",
      prix: "4000",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "5",
      rooms: "7",
      surface: "120",
      adresse: "Tetouan",
      img: require("./img/imma6.jpeg").default,
      key: "6",
    },
    {
      title: "Freestanding Gas Range",
      prix: "4500",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "5",
      rooms: "7",
      surface: "120",
      adresse: "Tetouan",
      img: require("./img/imma7.webp").default,
      key: "7",
    },
    {
      title: "Garbage Disposal, Microwave",
      prix: "5000",
      description:
        " Le Marche Etna House is a fully equipped villa with many 3 big rooms swimming pool terrace and lots of other facilities.",
      bath: "3",
      rooms: "6",
      surface: "150",
      adresse: "Tetouan",
      img: require("./img/imma8.webp").default,
      key: "8",
    },
  ]);
  const pageCount = Math.ceil(Cards.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const mainAnnonce = Cards.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((val, indexa, i = 0) => {
    return (
      <div className="wholeAnnonce" key={indexa}>
        <div className="forpic">
          {" "}
          <img src={val.img} alt="" width="389px" height="292px" />
        </div>
        <div className="fordescription">
          <h2>{val.title}</h2>
          <p>{val.description}</p>
          <div className="bardescription">
            <div className="chambre spacce" style={{ display: "flex" }}>
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
              </Avatar>{" "}
              {val.bath} bath
            </div>
            <div className="personne spacce" style={{ display: "flex" }}>
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
            <div className="mettre spacce" style={{ display: "flex" }}>
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
          <div className="mypricee">
            <p class="mphb-regular-price">
              Prices start at: &nbsp;
              <span class="mphb-price">
                <strong>
                  <span class="mphb-currency">{val.prix} MAD</span>
                </strong>
              </span>
            </p>
          </div>
          <div className="myoptionss">
            <button type="submit" className="btttn">
              Book
            </button>
            <Link className="forviewdit" to="/Description">
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="rowa" style={{ height: "100% , margin: 10px" }}>
        <div className="myannonces row" style={{ justifyContent:'center' }}> {mainAnnonce}</div>
        <br />
        <div style={{ float: "left", marginLeft: "35%" }}>
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

export default Annonce;
