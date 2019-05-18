import React from 'react';
import {NavLink} from "react-router-dom";
import TripInspirationMain from "./TripInspirationMain";


const TripInspirationChoice = (props) => {
        return (
            <>
                <h1>Search by: {props.match.params.search}</h1>
                <TripInspirationMain data={props.match.params.search}/>
                <NavLink to="/">Return to Home Page</NavLink>
            </>
        );

}


export default TripInspirationChoice;