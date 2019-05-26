import React from 'react';
import {NavLink} from "react-router-dom";


class Favourite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favourite: []
        };

    }

    componentDidMount() {
        this.setState((prevState) =>({
            favourite: [...prevState, ]
        }))
    }

    render() {
        return (
            <div>
favourite
                <NavLink to="/" className="btn link-btn return-btn">Return to Home Page</NavLink>

            </div>
        );
    }
}


export default Favourite;