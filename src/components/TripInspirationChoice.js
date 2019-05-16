import React from 'react';
import {NavLink} from "react-router-dom";
import TripInspirationMain from "./TripInspirationMain";


const TripInspirationChoice = (props) => {
        return (
            <>
                    <h1>Search by: {props.match.params.search}</h1>
                    <button><NavLink to="/">Return to Home Page</NavLink></button>
                    <TripInspirationMain data={{btn1:"country", btn2:"region", btn3:"language"}}/>
            </>
        );

}


export default TripInspirationChoice;