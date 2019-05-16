import React from 'react';


const TripInspirationChoice = (props) => {
        return (
            <h1>Search by: {props.match.params.search}</h1>
        );

}


export default TripInspirationChoice;