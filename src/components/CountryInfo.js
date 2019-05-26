import React from 'react';
import Map from "./Map";


class CountryInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: [],
            favoutite:[]
        };
    }

    componentDidMount() {
            fetch(`https://restcountries.eu/rest/v2/name/${this.props.countryName}`)
                .then(resp=>{
                    if(resp.ok) {
                        return resp.json()
                    }
                    // else{
                    //     throw new Error("Incorrect country")
                    //     }
                })
                .then (json => {
                    console.log(json);

                    this.setState({
                        country: json
                    });

                    return json

                })
    };

    handleOnClick = () => {

    };

    render() {

        return (
            <div className="country-info">
                <h3 className="h3">Capital of {this.props.countryName} is {[...this.state.country].map(e => e.capital)}</h3>
                <img className="img flag" alt="flag" src={[...this.state.country].map(e => e.flag)} height="30%" width="30%" />
                <p className="text">Area of {this.props.countryName} is {[...this.state.country].map(e => e.area)} km2</p>
                <p className="text">In {this.props.countryName} lives {[...this.state.country].map(e => e.population)} people</p>
                <p className="text">{this.props.countryName} lies in {[...this.state.country].map(e => e.subregion)}</p>
                <p className="text">The official language in {this.props.countryName} is {[...this.state.country].map(e => e.languages[0].name)} ({[...this.state.country].map(e => e.languages[0].nativeName)})</p>
                <p className="text">The currency of {this.props.countryName} is {[...this.state.country].map(e => e.currencies[0].name)} ({[...this.state.country].map(e => e.currencies[0].code)})</p>
                <button onClick={this.handleOnClick} className="add-btn btn">Add {this.props.countryName} to Favourite</button>
                <Map country={this.props.countryName} />
            </div>
        );
    }
}


export default CountryInfo;