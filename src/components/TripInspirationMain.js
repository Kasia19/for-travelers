import React, {Component} from 'react';
// import SearchResult from "./SearchResult";

class TripInspirationMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            countryList: {}
        };

    }
    //na klkniecie w buttona łączy nas serverm do wyszukiwania kraju... ipodaje info o nim
     handleOnchange = (event) => {
        event.preventDefault();
        this.setState({
            inputValue: event.target.value
        })
    };

    handleOnClick = (event) => {
        event.preventDefault();

    };


    // getData = (this.state.inputValue) => {
    //     fetch("https://restcountries.eu/rest/v2/name/this.state.inputValue").then(resp =>{
    //         if(resp.ok){
    //             return resp.json()
    //         }
    //         // else{
    //         //     throw new Error("Incorrect {...}")
    //         // }
    //     }
    //     ).then(json=>{
    //        console.log(json);
    //         return json
    //     });
    // };

    render() {
        if(this.props.data === "country"||this.props.data ==="region"||this.props.data ==="language") {
        return (
            <div>
            <form>
                <label>Type {this.props.data} you want to visit: </label>
                <input type="text" value={this.state.inputValue} onChange={this.handleOnchange}/>
                <button onClick={this.handleOnClick}>Search</button>
            </form>
                <ul>...
                    {/*<li>{this.getData()}</li>*/}
                </ul>
                {/*<SearchResult input={this.state.inputValue}/>*/}
            </div>
        )}  else {
            return (
                <div>
                <form>
                    <label> {this.props.data} choice: </label>
                    <label> Region: </label>
                    <input className="multiple_Region" type="text" value={this.state.inputValue} onChange={this.handleOnchange}/>
                    <label> Language: </label>
                    <input className="multiple_Language"type="text" value={this.state.inputValue} onChange={this.handleOnchange}/>
                    <button onClick={this.handleOnClick}>Search</button>
                </form>
                    {/*<SearchResult input={this.state.inputValue}/>*/}
                </div>
            )
        }

    };
};

export default TripInspirationMain;