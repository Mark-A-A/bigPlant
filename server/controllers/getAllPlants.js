const db = require("../models");

const TAG = "Controllers - getAllPlants"
export async function getAllPlants(req,res, next){
  db.Plant
    .find()
    .then((plants) => {
      console.log(TAG, "Plants retrieved from Mongo=> ", plants.length)
      res.json(plants)
    })
    .catch((err) => {
      console.log(TAG, "ERROR => Plants Not Retrieved ");
      res.status(404).json(err)
    });
}