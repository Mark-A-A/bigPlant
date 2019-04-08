import { Router } from "express"
import axios from "axios"
import { getAllPlants } from "../controllers";

const router = Router()

router.get("/plants", getAllPlants);

router.get("/plant/:plantId/comments", (req, res) => {
  res.json({ "hello": "world" })
});

module.exports = router;
