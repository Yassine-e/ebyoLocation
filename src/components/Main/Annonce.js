import React from "react";
import "./css/Annonce.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinBeam } from "@fortawesome/free-regular-svg-icons";
import { faMale, faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import imgaa from "./img/imm1.jpeg";
import imma2 from "./img/imma2.jpeg";
import imma3 from "./img/imma3.jpeg";

function Annonce() {
  return (
    <div className="myannonces">
      <div className="wholeAnnonce">
        <div className="forpic">
          {" "}
          <img src={imgaa} alt="" width="389px" height="292px" />
        </div>
        <div className="fordescription">
          <h2>Le Marche Etna House</h2>
          <p>
            Le Marche Etna House is a fully equipped villa with many 3 big
            rooms, swimming pool, terrace and lots of other facilities.
          </p>
          <div className="bardescription">
            <div className="chambre spacce">
              <FontAwesomeIcon icon={faGrinBeam} /> &nbsp; &nbsp; 4
            </div>
            <div className="personne spacce">
              <FontAwesomeIcon icon={faMale} /> &nbsp; &nbsp;2
            </div>
            <div className="mettre spacce">
              <FontAwesomeIcon icon={faHouseUser} /> &nbsp; &nbsp; 123m
            </div>
          </div>
          <div className="mypricee">
            <p class="mphb-regular-price">
              Prices start at: &nbsp;
              <span class="mphb-price">
                <strong>
                  <span class="mphb-currency">$</span>750
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

      <div className="wholeAnnonce">
        <div className="forpic">
          {" "}
          <img src={imma2} alt="" width="389px" height="292px" />
        </div>
        <div className="fordescription">
          <h2>Summer Villa Emilia</h2>
          <p>
            Summer Villa Emilia is a perfect place for luxury rest, traveling
            and tasting the best regional cuisine in Italy.
          </p>
          <div className="bardescription">
            <div className="chambre spacce">
              <FontAwesomeIcon icon={faGrinBeam} /> &nbsp; &nbsp; 3
            </div>
            <div className="personne spacce">
              <FontAwesomeIcon icon={faMale} /> &nbsp; &nbsp;6
            </div>
            <div className="mettre spacce">
              <FontAwesomeIcon icon={faHouseUser} /> &nbsp; &nbsp; 173m
            </div>
          </div>
          <div className="mypricee">
            <p class="mphb-regular-price">
              Prices start at: &nbsp;
              <span class="mphb-price">
                <strong>
                  <span class="mphb-currency">$</span>810
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
      <div className="wholeAnnonce">
        <div className="forpic">
          {" "}
          <img src={imma3} alt="" width="389px" height="292px" />
        </div>
        <div className="fordescription">
          <h2>Villa Bastilicata Grande</h2>
          <p>
            This is a perfect villa with spa center and hot tub for private,
            family and corporate rest in Le Marche region in Italy.
          </p>
          <div className="bardescription">
            <div className="chambre spacce">
              <FontAwesomeIcon icon={faGrinBeam} /> &nbsp; &nbsp; 6
            </div>
            <div className="personne spacce">
              <FontAwesomeIcon icon={faMale} /> &nbsp; &nbsp;4
            </div>
            <div className="mettre spacce">
              <FontAwesomeIcon icon={faHouseUser} /> &nbsp; &nbsp; 153m
            </div>
          </div>
          <div className="mypricee">
            <p class="mphb-regular-price">
              Prices start at: &nbsp;
              <span class="mphb-price">
                <strong>
                  <span class="mphb-currency">$</span>550
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
      {/*<div className="wholeAnnonce">
        <div className="forpic">
          {" "}
          <img src={imma4} alt="" width="389px" height="292px" />
        </div>
        <div className="fordescription">
          <h2>Villa Bastilicata Grande</h2>
          <p>
            This is a perfect villa with spa center and hot tub for private,
            family and corporate rest in Le Marche region in Italy.
          </p>
          <div className="bardescription">
            <div className="chambre spacce">
              <FontAwesomeIcon icon={faGrinBeam} /> &nbsp; &nbsp; 6
            </div>
            <div className="personne spacce">
              <FontAwesomeIcon icon={faMale} /> &nbsp; &nbsp;4
            </div>
            <div className="mettre spacce">
              <FontAwesomeIcon icon={faHouseUser} /> &nbsp; &nbsp; 153m
            </div>
          </div>
          <div className="mypricee">
            <p class="mphb-regular-price">
              Prices start at: &nbsp;
              <span class="mphb-price">
                <strong>
                  <span class="mphb-currency">$</span>550
                </strong>
              </span>
            </p>
          </div>
          <div className="myoptionss">
            <button type="submit" className="btttn">
              Book
            </button>
            <a className="forviewdit" href="/">
              View Details
            </a>
          </div>
        </div>
      </div>*/}
    </div>
  );
}

export default Annonce;
