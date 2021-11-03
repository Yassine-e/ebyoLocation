import React from "react";

import "./css/SearchBar.css";

function searchBar() {
  return (
    <div className="toolbar">
      <h1 className="toolTitle">The villa rental expert for your vacation</h1>
      <p className="toolminitil">
        Villagio offers diverse villas in different regions to help you spend
        your dream vacation. Book your villa online quickly and safely.
      </p>
      <div className="forfilter">
        <div className="form-group">
          <label>Living Aria</label>
          <input
            type="text"
            name="FirstName"
            placeholder="Where do you want to live?"
          />
        </div>
        <div className="form-group">
          <label>TYPE</label>
          <select name="" id="">
            <option value="Select Brand">Appartement</option>
          </select>
        </div>
        <div className="form-group">
          <label>Price from</label>
          <input type="number" className="ourprice" placeholder="Min" />
        </div>
        <div className="form-group">
          <label>To</label>
          <input type="number" className="ourprice" placeholder="Max" />
        </div>
        <div className="form-group">
          <label>Chambre</label>
          <input type="number" className="ourprice" placeholder="Nombre" />
        </div>
        <br /> <br />
        <button type="submit" className="button nevy-button">
          Check Availability
        </button>
      </div>
    </div>
  );
}

export default searchBar;
