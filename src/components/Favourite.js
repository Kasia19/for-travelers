import React from 'react';
import {NavLink} from "react-router-dom";


class Favourite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }


    render() {
        return (
            <div>
                <h1 className="h1">Favourite countries</h1>
                <NavLink to="/" className="btn link-btn return-btn">Return to Home Page</NavLink>
                <ul>

                </ul>

            </div>
        );
    }
}


export default Favourite;