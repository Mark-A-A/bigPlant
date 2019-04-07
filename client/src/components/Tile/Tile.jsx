
import React from "react";

import { Card } from 'react-bootstrap';

import "./stylesTile.scss";

export function Tile({ className, title, children }) {
  return (
    <React.Fragment>
      <Card className={className}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
            {children}
        </Card.Body>
      </Card>

    </React.Fragment>
  );
}

