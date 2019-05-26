import React from "react";
import { NavLink } from "react-router-dom";


const TripInspirtionButtons = () => (
    <div className="header-buttons" >

        <NavLink className="btnNav  link-btn"  to="/search/country" >Search by country</NavLink>
        <NavLink className="btnNav  link-btn" to="/search/region">Search by region</NavLink>
        <NavLink className="btnNav  link-btn" to="/search/language">Search by language</NavLink>
        <NavLink className="btnNav  link-btn" to="/search/multiple">Multiple search</NavLink>
        <NavLink to="/favourite" className="btnNav link-btn favourite-btn">Go to Favourite!!!</NavLink>
    </div>
);

export default TripInspirtionButtons;