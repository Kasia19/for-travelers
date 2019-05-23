import React from 'react';
import TripInspirtionButtons from "./TripInspirationButtons";



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
                <img src="../images/ancient-architect-architecture-2104882.jpg" alt='nepal' width="200px" height="100px"/>
            </div>

        </div>
    );
};




export default TripInspirationHeader;