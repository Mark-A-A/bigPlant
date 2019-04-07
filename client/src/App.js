import React, { Component } from "react";

//TO DO: add REdux

import { Routes } from "./navigation/Routes";

import "./styles.scss";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Routes/>
      </React.Fragment>
    );
  }
}

export default App;
