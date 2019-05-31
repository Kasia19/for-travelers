import React from 'react';
import "./SCSS/main.scss";
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";

import TripInspirationHeader from "./components/TripInspirationHeader";
import TripInspirationChoice from "./components/TripInspirationChoice";
import NotFound from "./components/NotFound";
import CountryPage from "./components/CountryPage";
import Favourite from "./components/Favourite";



// import './App.css';  zrobić class
// state favourite pusta tablica + funkcja przyjmie nazwe panstwa  i ddac do tablicy w stanie przekazywanie zdarzen globany stan
// doprzeslac metode do info o kraju d
// do sciezki favourite przestac stan App

// dla favvourite i dla country page

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favourites: []
        };
    }
    handleAddToFavourite = (countryName)=> {
        this.setState((prevState) => ({
            favourites: [...prevState, countryName],
        }))

    };

    render() {
        return (
        <div>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={TripInspirationHeader}/>
                <Route exact path="/search/:search(country|region|language|multiple)/:country" component={CountryPage}/>
                <Route exact path="/favourite" render={props => <Favourite {...props} list={this.state.favourites}/>}/>
                <Route path="/search/:search(country|region|language|multiple)" component={TripInspirationChoice}/>
                <Route component={NotFound}/>
            </Switch>
        </HashRouter>
        </div>
        )}
};


export default App;
