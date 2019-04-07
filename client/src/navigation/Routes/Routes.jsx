import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  // Link
} from "react-router-dom";

import { Nav } from '../Nav'

import {
  HomePlants,
  PlantDetails,
  Login,
  Register
} from '../../pages'

export function Routes() {
  return (
    <Router>
      <div className="page-header">
        <Nav />
      </div>

      <div className="page-body">
        <div className="container">
          <Route exact path="/" component={HomePlants}/>
          <Route exact path="/details" component={PlantDetails}/>
          <Route exact path="/logIn" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </div>
      </div>
    </Router>
  )
}
