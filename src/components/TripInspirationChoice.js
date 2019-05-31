import React from 'react';
import {NavLink} from "react-router-dom";
import TripInspirationMain from "./TripInspirationMain";
import photo12 from "../images/Gran_Canaria1.jpg";
import photo11 from "../images/DOHA 20181021_205417.jpg";
import photo10 from "../images/NEPAL_220181013_082943.jpg";
import photo9 from "../images/NEPAL_220181011_100718.jpg";
import photo8 from "../images/NEPAL_220181009_084959.jpg";
import photo7 from "../images/NEPAL_20181020_090631.jpg";


const TripInspirationChoice = (props) => {
        return (
        <div className="main-search-page">
            <div className="search-page">
                <h1 className="h1">Search by: {props.match.params.search}</h1>
                    <TripInspirationMain data={props.match.params.search}/>
                <NavLink to="/" className="btnNav  link-btn return-btn">Return to Home Page</NavLink>

            </div>
                <div className="photos">
                        <img className="img photo7" src={photo7} alt="budda" height="30%" width="30%"/>
                        <img className="img photo8" src={photo8} alt="desert" height="30%" width="30%"/>
                        <img className="img photo9" src={photo9} alt="architecture" height="30%" width="30%"/>
                        <img className="img photo10" src={photo10} alt="himalayas" height="30%" width="30%"/>
                        <img className="img photo11" src={photo11} alt="doha2" height="30%" width="30%"/>
                        <img className="img photo12" src={photo12} alt="gran_canaria" height="30%" width="30%"/>
                </div>
        </div>
        );

}


export default TripInspirationChoice;