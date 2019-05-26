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



// import './App.css';

const App = () => (
    <div>

      <HashRouter>
        <Switch>
          <Route exact path="/" component={TripInspirationHeader }/>
          <Route exact path="/search/:search(country|region|language|multiple)/:country" component={CountryPage }/>
          <Route exact path="/favourite" component={Favourite }/>
            <Route path="/search/:search(country|region|language|multiple)" component={TripInspirationChoice}/>

          <Route component={NotFound}/>
        </Switch>
      </HashRouter>

    </div>
  );


export default App;
