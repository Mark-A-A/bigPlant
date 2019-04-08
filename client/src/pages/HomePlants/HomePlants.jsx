import React from "react";

import { Plant } from '../../components'

import { 
  API,
  plantImageMapper
} from "../../utils"

import "./styleHomePlants.scss";

export class HomePlants extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      authentiated: false,
      plants: [],
      error: {}
    };
  }

  componentDidMount = () =>{
    this.fetchAllPlants()
  }

  fetchAllPlants = () =>{
    API.getAllPlants()
      .then((response)=>{
        this.setState({
          plants: response.data
        });
      }).catch((e)=>{
        this.setState({
          error: e
        });
      })
  }

  renderPlants = () => {
    const { plants } = this.state;
    return plants.map((plant,i )=>{
      const {latinName, name} = plant
      const source = plantImageMapper[latinName];
      console.log("source =>", source);
      return (
        <li key={plant._id} className={`plant-list-item ${name.replace(/ /gi, "")}` }>
          <Plant {...plant} src={source}/>
        </li>
      )
    })
  }

  render() {
    const { plants } = this.state;
    return (
      <React.Fragment>
        <div className="plant-directory-home-page">
          {
            plants.length && 
            <div className="plant-list">
              {this.renderPlants()}
            </div>
          }
        </div>
      </React.Fragment>

    );
  }
}
