import React from 'react';
import {NavLink} from "react-router-dom";
import CountryInfo from "./CountryInfo";


class CountryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <h1>Information about: {this.props.match.params.country}</h1>
                <NavLink className="btn link-btn return-btn" to="{`/search/${this.props.data}`}">Return to country search</NavLink>
                <NavLink to="/" className="btn link-btn return-btn">Return to Home Page</NavLink>
                <CountryInfo countryName={this.props.match.params.country}/>
                <NavLink className="btn link-btn return-btn" to="{`/search/${this.props.data}`}">Return to country search</NavLink>

            </div>
        );
    }
}


export default CountryPage;