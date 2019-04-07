import React, { Component } from "react";

import { Provider } from 'react-redux'

import { Routes } from "./navigation/Routes";

import { store as appStore } from './Redux/appStore'

import "./styles.scss";

class App extends Component {

  render() {
    return (
      <Provider store={appStore}>
        <React.Fragment>
          <Routes/>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
