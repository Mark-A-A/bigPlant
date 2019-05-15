import React from "react";

import { Comments } from "../../components";

import "./plantDetails.scss";

export function PlantDetails (props) {
  
  const {
    title,
    name,
    latinName,
    description,
    care,
    src,
  } = props.location.state

  return (
    <div className="plant-details">
      <section className="image-section">
        <img src={src}></img>
        <h2>{name}</h2>
        
      </section>
      <section className="description-comments-section">
        <h1>{title}</h1>
        <p className="description">{care}</p>
        <Comments />
      </section>
    </div>
  );
}