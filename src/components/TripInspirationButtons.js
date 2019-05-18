import React from "react";
import { NavLink } from "react-router-dom";


const TripInspirtionButtons = () => (
    <div>

        <NavLink className="btn"  to="/search/country" >Search by country</NavLink>
        <NavLink className="btn" to="/search/region">Search by region</NavLink>
        <NavLink className="btn" to="/search/language">Search by language</NavLink>
        <NavLink className="btn" to="/search/multiple">Multiple search</NavLink>
    </div>
);

export default TripInspirtionButtons;