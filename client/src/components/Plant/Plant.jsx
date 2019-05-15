import React from "react";
import { Link } from "react-router-dom";

import { Card } from 'react-bootstrap';

import "./stylePlant.scss";

export class Plant extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false
    };
  }

  handleHover = ( ) => {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }
  render(){
    const { isHovered } = this.state

    const { 
      name,
      title,
      latinName,
      description,
      src
    } = this.props

    const overlayClass = isHovered ? `plant-title-overlay hovered`: `plant-title-overlay`

    return (
      <div className="plant-wrapper" role="img" aria-label="BH-Plant">
        <Card className="plant-card hollow">
          <Link to={{
            pathname: `/details/${name}`,
            state: { ...this.props }
          }}>
            <div className="plant-image-wrapper" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
              <Card.Img className="plant-image" variant="top" src={src} />
              <div className={overlayClass}>
                {
                  isHovered && 
                  <div className="title-overlay-wrapper">
                    <Card.Title className="plant-title-overlay">
                      <h2>{title}</h2>
                    </Card.Title>
                  </div>
                }
              </div>
            </div>
          </Link>
          <Card.Body className="plant-body">
            <Link to={{
              pathname: `/details/${name}`,
              state: {...this.props}
            }}>
              <Card.Title className="plant-header">{name}</Card.Title>
            </Link>
            <Card.Header className="plant-subheader">{latinName}</Card.Header>
            <Card.Text className="plant-descr">{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
