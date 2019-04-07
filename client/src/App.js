import React, { Component } from "react";

//TO DO: add REdux

import { 
  Nav,

  // TO DO: Add Pages 
} from "./components";


//TO DO: add API services
// import API from "./utils/API";

import "./styles.scss";

class App extends Component {

  render() {
    return (
      <div className="page-header">
        <Nav />
      </div>
    );
  }
}

export default App;
