import React from "react";
import { Link } from "react-router-dom";

const TripInspirtionButtons = () => (
    <div>
        <button><Link to="/search/country">Search by country</Link></button>
        <button><Link to="/search/region">Search by region</Link></button>
        <button><Link to="/search/language">Search by language</Link></button>
        <button><Link to="/search/multiple">Multiple search</Link></button>
    </div>
);

export default TripInspirtionButtons;