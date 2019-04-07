import { Router } from "express"
import axios from "axios"
// import { commentsController } from "../../controllers";

const router = Router()

router.get("/:plantId/comments", (req, res) => {
  res.json({ "hello": "world" })
});

module.exports = router;
