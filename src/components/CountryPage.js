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
            <div className="country-page">
                <h1 className="h1">Information about: {this.props.match.params.country}</h1>
                <div className="country-page-btn">
                <NavLink className="btnNav  link-btn return-btn" to="{`/search/${this.props.data}`}">Return to country search</NavLink>
                <NavLink to="/" className="btnNav  link-btn return-btn">Return to Home Page</NavLink>
                <NavLink to="/favourite" className="btnNav link-btn favourite-btn">Go to Favourite!!!</NavLink>
                </div>
                <CountryInfo countryName={this.props.match.params.country}/>
                <NavLink className="btnNav  link-btn return-btn" to="{`/search/${this.props.data}`}">Return to country search</NavLink>

            </div>
        );
    }
}


export default CountryPage;