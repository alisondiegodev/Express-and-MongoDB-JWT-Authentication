const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());

// view engine
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoutes);

// database connection
const dbURI =
  "mongodb+srv://alisondiegodev:vc4wiofMMftl8L8g@jwt.kgcr0.mongodb.net/?retryWrites=true&w=majority&appName=JWT";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(3000, () =>
      console.log("Server started at http://localhost:3000")
    )
  )
  .catch((err) => console.log(err));
