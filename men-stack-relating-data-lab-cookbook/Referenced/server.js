const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session");

const authController = require("./controllers/auth.js");
const foodsController = require("./controllers/foods.route.js");
const userController = require("./controllers/users.route.js")
const recipeController = require("./controllers/recipes.route.js")
const ingredientController = require("./controllers/ingredients.route.js")

const isSignedIn = require("./middleware/is-signed-in.js");
const passUserToView = require("./middleware/pass-user-to-view.js");

const port = process.env.PORT ? process.env.PORT : "3001";
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);


// ****************************CODE***********************************

app.use(passUserToView)

app.get("/", (req, res) => {
  if (req.session.user) {                           //PROBLEM HERE
    res.redirect(`/users/${req.session.user.username}/recipes`);
  } else {
    res.render("index.ejs");
  }
});
app.use("/auth", authController)

app.use(isSignedIn)

app.use("/users/:userId/foods", foodsController)
app.use("/users/:userId/community", userController)
app.use("/users/:userId/recipes", recipeController)
app.use("/users/:userId/ingredients", ingredientController)

// ****************************CODE***********************************


app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
