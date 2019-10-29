import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home_cards from './Components/Home_cards';
import Home_rows from './Components/Home_rows';
import Notfound from './Components/Notfound';
import Toevoegen from './Components/Toevoegen';


export default class App extends Component{

  render(){
    return(
      <BrowserRouter>
        
        <React.Fragment>
        <Switch>
          <Route path="/" component={ Home_cards } exact={ true }/>
          <Route path="/homepage_rows" component={ Home_rows } exact={ true }/>
          <Route path="/toevoegen" component={ Toevoegen } exact={ true }/>
          <Route component={ Notfound }/>
          </Switch>
        </React.Fragment>
        
      </BrowserRouter>
    )
  }
}