const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// API Routes
router.use("/api", apiRoutes);
// API Routes
router.use("/auth", authRoutes);

// HTTP status 404: NotFound
router.use(function (req, res) {
    res.status(404)        
        .send('Not found');
});

// Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


module.exports = router;
