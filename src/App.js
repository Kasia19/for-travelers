import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
import TripInspirationHeader from "./components/TripInspirationHeader";
import TripInspirtionButtons from "./components/TripInspirationButtons";
import TripInspirationChoice from "./components/TripInspirationChoice";
import NotFound from "./components/NotFound";


// import './App.css';

const App = () => (
    <div>
        <TripInspirationHeader/>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={TripInspirtionButtons}/>
          <Route path="/search/:search(country|region|language|multiple)" component={TripInspirationChoice}/>
          <Route component={NotFound}/>
        </Switch>
        </HashRouter>

    </div>
  );


export default App;
