import React, {Component} from 'react';
import { NavLink } from "react-router-dom";


class TripInspirationMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputCountry: '',
            inputRegion: '',
            inputLanguage: '',
            inputMultiLang: '',
            inputMultiReg: '',
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

        })
    };
    handleOnchangeMultiReg = (event) => {
        event.preventDefault();
        this.setState({
            inputMultiReg: event.target.value,

        })
    };

    handleOnchangeMultiLang = (event) => {
        event.preventDefault();
        this.setState({
            inputMultiLang: event.target.value,
        })
    };
    getData = (elem) => {
        fetch(`https://restcountries.eu/rest/v2/${elem}`).then(resp =>{
            if(resp.ok){
                return resp.json()
            }
            // else{
            //     throw new Error("Incorrect {...}")
            // }
        }).then(json=>{
            // gdy undefined jakis if  jak poprawne to do state
            // console.log(json);
            this.setState(()=> ({
                byCountry: [...json],
                byRegion: [...json],
                byLanguage: [...json],
                byMultiple: [...json],
            }))
            return json
        });
    };

    handleOnClick = (event) => {
        event.preventDefault();
        if (this.props.data === "country") {
            return this.getData(`name/${this.state.inputCountry}`);
        }
        if(this.props.data ==="region") {
            return this.getData(`region/${this.state.inputRegion}`);
        }
        if(this.props.data ==="language") {
            return this.getData(`lang/${this.state.inputLanguage}`);
        };
        //https://restcountries.eu/rest/v2/{service}?fields={field};{field};{field}
        if(this.props.data ==="multiple") {
            return this.getData(`all?fields=${this.state.inputMultiLang};${this.state.inputMultiReg}`);
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
            <div className="search">
            <form>
                <label className="input-label">Type {this.props.data} you want to visit: </label>
                <input className="input" type="text"  value={this.input()} onChange={this.handleOnchange}/>
                <button className="input-btn btn" onClick={this.handleOnClick}>Search</button>
            </form>

                <ul>
                    {this.state.byCountry.map(e => (<li key={e.name}><NavLink exact to={`/search/${this.props.data}/${e.name}`} className=" link-btn country-list" >{e.name}</NavLink></li>))}
                </ul>
            </div>
        )}  else {
            return (
                <div>
                <form>
                    <label  className="input-label"> {this.props.data} choice: </label>
                    <label  className="input-label"> Language: </label>
                    <input className="multiple_Language input"  type="text" value={this.state.inputMultiLang} onChange={this.handleOnchangeMultiLang}/>
                    <label  className="input-label"> Region: </label>
                    <input className="multiple_Region input"  type="text" value={this.state.inputMultiReg} onChange={this.handleOnchangeMultiReg}/>
                    <button className="input-btn btn" onClick={this.handleOnClick}>Search</button>
                </form>
                   <ul>
                       {this.state.byMultiple.map(e => (<li key={e.name}><NavLink to={`/search/${this.props.data}/${e.name}`} className=" link-btn country-list" >{e.name}</NavLink></li>))}
                    </ul>
                </div>

            )
        }

    };
};

export default TripInspirationMain;