import React from "react";

import {
  Button,
  ButtonToolbar,
  Dropdown

} from 'react-bootstrap';

import logo from "../../assets-bh/bh-logo-optimized.png"

import "./styleNav.scss";

export function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-items-wrapper">
          <div className="nav-item brand-logo">
            <a href="/">
              <img src={logo} alt="big-plant"></img>
            </a>
          </div>
          <div className="nav-item title">
            <div className="navbar-brand-header">
              <h1>Big Plant</h1>  
            </div>
          </div>
          <div className="nav-item buttons">
            
            <ButtonToolbar>
              <Dropdown className="button-links-dropsdown about">
                <Dropdown.Toggle
                  title={"About"}
                  variant="success"
                  id={`dropdown-variants-about`}
                >
                  About
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="1" href="#/action-1">Our Team</Dropdown.Item>
                  <Dropdown.Item eventKey="2" href="#/action-2">Contact Us</Dropdown.Item>
                  <Dropdown.Item eventKey="3" href="#/action-3">Water Us</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

                  
              <Dropdown className="button-links-dropsdown buy-plants">
                <Dropdown.Toggle 
                  variant="success"
                  id={`dropdown-variants-about`}
                >
                  Buy Us Plants
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Thanks!</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button variant="success">
                Logout
              </Button>

            </ButtonToolbar>
          </div>
        </div>
      </div>
    </nav>
  );
}
