import React from 'react';
import TripInspirtionButtons from "./TripInspirationButtons";

import photo1 from "../images/adult-back-view-buddha-750895.jpg";
import photo2 from "../images/adventure-daylight-desert-320555.jpg";
import photo3 from "../images/ancient-architect-architecture-2104882.jpg";
import photo4 from "../images/asia-china-himalayas-1531660.jpg";
import photo5 from "../images/ancient-architecture-art-732895.jpg";
import photo6 from "../images/NEPAL_20181004_154110.jpg";


function TripInspirationHeader () {
    return (
        <div>
            <h2>
                You don't know what to do during your vacation!!!<br />
                Visit
            </h2>
            <h1>TRIP INSPIRATION</h1>
            <h2>We will help you choose where you want to go...</h2>
            <TripInspirtionButtons/>
            <div>
                <img src={photo1} alt="budda" height="30%" width="30%"/>
                <img src={photo2} alt="desert" height="30%" width="30%"/>
                <img src={photo3} alt="architecture" height="30%" width="30%"/>
                <img src={photo4} alt="himalayas" height="30%" width="30%"/>
                <img src={photo5} alt="architecture" height="30%" width="30%"/>
                <img src={photo6} alt="Nepal1" height="30%" width="30%"/>
            </div>

        </div>
    );
};




export default TripInspirationHeader;