import React from "react";
import "./css/Initial.css";
import Menu from "./Menu";
import Presentation from "./Presentation";
import SearchBar from "./SearchBar";
import Annonce from "./Annonce";
import Footer from "./Footer";

function Initial() {
  return (
    <div>
      <div className="firstComponenet">
        <Menu />
      </div>
      <div className="secondComponent">
        <Presentation />
      </div>
      <div className="thirdComponent">
        <SearchBar />
      </div>
      <br />
      <br />
      <br />
      <div className="fourthComponent">
        <Annonce />
      </div>
      <div className="fiveeComponent">
        <Footer />
      </div>
    </div>
  );
}

export default Initial;
