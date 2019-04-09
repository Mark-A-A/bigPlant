import React from "react";

import {
  Button,
  Form,
} from 'react-bootstrap';

import { Tile } from '../../components'

export class Register extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
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
        <div className="register-page">
          <div className="tile-wrapper">
            <Tile className={'register-tile'} title={"Register"}>
              <Form
                noValidate
                validated={validated}
                onSubmit={e => this.handleSubmit(e)}
              >
                
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Please enter a name."
                    defaultValue="Mark"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>

                </Form.Group>
                
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Please enter an email." required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom04">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="Password" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a password.
                  </Form.Control.Feedback>
                </Form.Group>
                  {/* <Form.Group controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group> */}

                <Button type="submit">Register</Button>
              </Form>
            </Tile>

          </div>
        </div>
      </React.Fragment>
      
    );
  }
}
