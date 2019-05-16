import React from "react";
import { NavLink } from "react-router-dom";

const TripInspirtionButtons = () => (
    <div>
        <button><NavLink to="/search/country" >Search by country</NavLink></button>
        <button><NavLink to="/search/region">Search by region</NavLink></button>
        <button><NavLink to="/search/language">Search by language</NavLink></button>
        <button><NavLink to="/search/multiple">Multiple search</NavLink></button>
    </div>
);

export default TripInspirtionButtons;