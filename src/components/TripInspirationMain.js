import React, {Component} from 'react';
import {getDataCountry, getDataRegion, getDataLanguage} from "./SearchResult";

class TripInspirationMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputCountry: '',
            inputRegion: '',
            inputLanguage: '',
            inputMultiple: '',
            byCountry: [],
            byRegion: [],
            byLanguage: [],
            byMultiple: [],
        };

    }
    //na klkniecie w buttona łączy nas serverm do wyszukiwania kraju... ipodaje info o nim
     handleOnchange = (event) => {
        event.preventDefault();
        this.setState({
            inputCountry: event.target.value,
            inputRegion: event.target.value,
            inputLanguage: event.target.value,
            inputMultiple: event.target.value,
        })
    };

    handleOnClick = (event) => {
        event.preventDefault();
        if (this.props.data === "country") {
            return getDataCountry(this.state.inputCountry);
        }
        if(this.props.data ==="region") {
            return getDataRegion(this.state.inputRegion);
         }
        if(this.props.data ==="language") {
            return getDataLanguage(this.state.inputLanguage);
        };
    };

    input =() =>{
        if(this.props.data === "country"){
            return this.state.inputCountry
        }if(this.props.data === "region"){
            return this.state.inputRegion
        }if(this.props.data === "language"){
            return  this.state.inputLanguage
        }
    };



    render() {
        if(this.props.data === "country"||this.props.data ==="region"||this.props.data ==="language") {
        return (
            <div>
            <form>
                <label>Type {this.props.data} you want to visit: </label>
                <input type="text" value={this.input()} onChange={this.handleOnchange}/>
                <button onClick={this.handleOnClick}>Search</button>
            </form>
                <ul>
                  {/*{this.state.byCountry.map(e =>  <li>{e.name}</li>)}*/}
                </ul>

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

                </div>
            )
        }

    };
};

export default TripInspirationMain;