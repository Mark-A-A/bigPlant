import React from "react";

import { Form, Button } from 'react-bootstrap';

import { Tile } from '../../components'

import "./stylesLogIn.scss";

export class Login extends React.Component {
    constructor(...args) {
      super(...args);

      this.state = {
        validated: false
      };
    }

    handleSubmit(event) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.setState({ validated: true });
    }

    render() {
      const { validated } = this.state;
      return (
        <React.Fragment>
          <div className="log-in-page">
            <div className="tile-wrapper">
              <Tile className={'log-in-tile'} title={"Log In"}>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={e => this.handleSubmit(e)}
                >
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button type="submit">Log In</Button>
                </Form>
              </Tile>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
