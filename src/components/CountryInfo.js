import React from 'react';


class CountryInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            country: [],
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

    // componentDidMount() {
    //     fetch(`http://battuta.medunes.net/api/country/search/?country=${this.props.countryName}&key=ef105569401a632963968018de6f0060`)
    //         .then(resp=>{
    //             if(resp.ok) {
    //                 return resp.json()
    //             }
    //             // else{
    //             //     throw new Error("Incorrect country")
    //             //     }
    //         })
    //         .then (json => {
    //             console.log(json);
    //
    //             // this.setState({
    //             //     country: json
    //             // });
    //
    //             return json
    //
    //         })
    // };

    render() {
        return (
            <div>
                <h3>Capital of {this.props.countryName} is {[...this.state.country].map(e => e.capital)}</h3>
                <img alt="flag" src={[...this.state.country].map(e => e.flag)} height="auto" width="auto" border="2px solid black"/>
                <p>Area of {this.props.countryName} is {[...this.state.country].map(e => e.area)}</p>
                <p>In {this.props.countryName} lives {[...this.state.country].map(e => e.population)} people</p>
                <p>{this.props.countryName} lies in {[...this.state.country].map(e => e.subregion)}</p>
                <p>The official language in {this.props.countryName} is {[...this.state.country].map(e => e.languages[0].name)} ({[...this.state.country].map(e => e.languages[0].nativeName)})</p>
                <p>The currency of {this.props.countryName} is {[...this.state.country].map(e => e.currencies[0].name)} ({[...this.state.country].map(e => e.currencies[0].code)})</p>
            </div>
        );
    }
}


export default CountryInfo;