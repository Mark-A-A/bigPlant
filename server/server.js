import express from "express";
// import path from "path";

import routes from "./routes";

import connectToMongoDB from "./config/connectToMongoDB"

const PORT = process.env.PORT || 1738;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use Express Router modules for routing
app.use(routes);

// Connect to the Mongo DB
connectToMongoDB()
  .then(()=>{
    //Start server
    app.listen(PORT, function() {
      console.log(`🌎 ==> API server now listening on port ${PORT}!`);
    });
  }) 
  .catch((e)=>{
    console.error("=======================")
    console.error("Failed to Initialize Server")
    console.dir(e)
    console.error("=======================")
  })

