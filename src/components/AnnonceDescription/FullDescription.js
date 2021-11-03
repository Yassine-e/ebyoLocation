import React from "react";
import "./css/FullDescription.css";
import ply from "./img/playaaa.jpeg";
import play1 from "./img/play1.jpeg";
import play2 from "./img/play2.jpeg";
import play3 from "./img/play3.jpeg";
import play4 from "./img/play4.jpeg";

function FullDescription() {
  return (
    <div className="fulldescript">
      <div className="descripleft">
        <div className="detaildescript">
          Perfect place for private, family and corporate rest in Le Marche
          region, with best nature views. Bastilicata Grande Villa also includes
          a spa center and hot tub. Guests can enjoy an outdoor pool and a
          restaurant catering. There is a sitting area, a dining area and a
          kitchen. A flat-screen TV with satellite channels is featured. <br />{" "}
          <br />
          You can play tennis at the property, and the area is popular for
          windsurfing and canoeing. The villa is located 4-minute walk from the
          beach. Featuring free WiFi and garden views and lots of sitting area,
          there are lot of things.
        </div>
        <div className="imgannonces">
          <h5 className="details-title">Plus de Photos</h5>
          <br />
          <br />
          <div className="linecadr">
            <div className="cadrephotot">
              <img src={play1} alt="" />
            </div>
            <div className="cadrephotot">
              <img src={play2} alt="" />
            </div>
            <div className="cadrephotot">
              <img src={play3} alt="" />
            </div>
            <div className="cadrephotot">
              <img src={play4} alt="" />
            </div>
          </div>
          <div className="aboutDetails">
            <h2 class="details-title">Details</h2>
            <ul>
              {" "}
              <li id="firstfol">
                <span className="titlee">Adresse:</span>
                <span className="answer">Casablanca-Rabat</span>
              </li>
              <li>
                <span className="titlee">Etat:</span>
                <span className="answer">
                  You can play tennis at the property, and the area.{" "}
                </span>
              </li>
              <li>
                <span className="titlee">Etage: </span>
                <span className="answer">3</span>
              </li>
              <li>
                <span className="titlee">Pieces:</span>
                <span className="answer">6</span>
              </li>
              <li>
                <span className="titlee">salle de bain:</span>
                <span className="answer">2 salles</span>
              </li>
              <li>
                <span className="titlee">Surface</span>
                <span className="answer">150m2</span>
              </li>
              <li className="godown">
                <span className="titlee okee">Price At :</span>
                <span className="answer addanswer">2400DH/mois</span>
              </li>
            </ul>
          </div>
        </div>
        <br /> <br />
        <h2 class="details-title">
          2 thoughts on “Villa Bastilicata Grande”
        </h2>{" "}
        <br /> <br />
        <div className="aboutComment">
          <div className="profilee">
            <div className="img"></div>
            <div className="forname">
              <div className="name">Byron Banks</div>
              <div className="timee"> June 14, 2017 at 7:57 am </div>
            </div>
          </div>
          <div className="thecomment">
            <p>
              I loved this place – very quiet in comparison to other places in
              Campania! Will come here during my next vacation.
            </p>
          </div>
        </div>
        <div className="aboutComment">
          <div className="profilee">
            <div className="img"></div>
            <div className="forname">
              <div className="name">Misty Mason</div>
              <div className="timee"> June 14, 2017 at 7:57 am </div>
            </div>
          </div>
          <div className="thecomment">
            <p>
              I agree, a wonderful place to enjoy the nature and away from noisy
              cities.
            </p>
          </div>
        </div>
        <br /> <br />
        <h2 class="details-title">Leave a Replay</h2> <br />
        <p className="loggin">You must be logged in to post a comment</p> <br />
        <div className="moncadra fullPub tleftt">
          <p className="contentCadr fullcadr ">Log in</p>
        </div>
      </div>
      <div className="descripright">
        <h5>Contacter l'annonceur:</h5>
        <div className="form-group">
          <input type="text" name="FirstName" placeholder="Votre Nom" />
        </div>
        <br />
        <div className="form-group">
          <input type="text" name="FirstName" placeholder="Votre Email" />
        </div>
        <br />
        <div className="form-group">
          <input type="text" name="FirstName" placeholder="Votre Téléphone" />
        </div>
        <br />
        <div className="form-group">
          <textarea
            name="FirstName"
            id=""
            placeholder="Decrivez vos besoin specifique"
            cols="20"
            rows="4"
          ></textarea>
        </div>
        <br />
        <br />
        <div className="moncadra fullPub">
          <p className="contentCadr fullcadr">Contacter</p>
        </div>{" "}
        <br /> <br /> <br />
        <span>REGION</span>
        <br /> <br />
        <div className="myregions">
          <div className="cadroa">Casablanca</div>
          <div className="cadroa">Rabat</div>
        </div>
        <br /> <br /> <br />
        <span>WE RECOMMEND</span>
        <br /> <br />
        <img src={ply} alt="" width="273px" height="140px" />
        <br /> <br />
        <span>
          {" "}
          <strong>Summer Villa Emilia</strong>{" "}
        </span>{" "}
        <br />
        <p className="toprice">Prices start at: 2530DH/moins</p> <br />
        <div className="moncadra fullPub tleftt myconsult">
          <p className="contentCadr fullcadr  ">Consulter</p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default FullDescription;
