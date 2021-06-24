const express = require("express");
const mongoose = require("mongoose");
const routes = require("routes");
const app = express();
const PORT = process.env.PORT || 3001;


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//Define API routes
  app.use(routes);


//Mongo DB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/google-books";

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });