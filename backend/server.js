const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const user = require("./routes/user");
const profile = require("./routes/profile");
const question = require("./routes/question");
const upload = require("./routes/upload");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(err => {
    console.log(err);
  });

app.use("/user", user);
app.use("/profile", profile);
app.use("/question", question);
app.use("/upload", upload);

const port = process.env.PORT || 5000;

app.use(passport.initialize());

require("./config/passport")(passport);

app.listen(port, () => {
  console.log("server is up on port " + port);
});
