const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const morgan = require("morgan");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const passport =require('passport')
const user = require('./server/routes/userRouts')


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'))

app.use(session({
  secret: login,
  store: MongoStore({}),
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use("/users", user)
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
