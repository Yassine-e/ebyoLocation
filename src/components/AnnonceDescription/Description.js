import React from "react";
import "./css/Description.css";
import Menu2 from "./Menu2";
import Check from "./Check";
import AnnoncePrincipal from "./AnnoncePrincipal";
import FullDescription from "./FullDescription";
import Footer from "./Footer";
function Description() {
  return (
    <div>
      <div className="firstComponenet">
        <Menu2 />
      </div>
      <div className="secondocompo">
        <Check />
      </div>
      <div className="thirdocompo">
        <AnnoncePrincipal />
      </div>
      <div className="firthoCompo">
        <FullDescription />
      </div>
      <div className="Compo">
        <Footer />
      </div>
    </div>
  );
}

export default Description;
