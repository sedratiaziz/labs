const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Recipe = require("../models/recipe");

router.get("/", async (req, res) => {
  const user = await User.findById(req.session.user._id);
  const recipes = await Recipe.find();
  
  res.render("recipes/index.ejs", { recipes, user });
});

router.get("/new", async (req, res) => {
  res.render("recipes/new.ejs");
});

router.post("/", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    const newRecipe = req.body;

    newRecipe.owner = user._id;
    await Recipe.create(newRecipe);    
    await user.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});


router.delete("/:recipeId", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    console.log(user.username);
      
    await Recipe.deleteOne();
    
    res.redirect(`/`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});


router.get("/:recipeId/edit", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    const recipe = await Recipe.findById(req.params.recipeId);
    res.render("recipes/edit.ejs", {recipe});
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.put("/:recipeId", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    const recipe = await Recipe.findById(req.params.recipeId);

    recipe.set(req.body)
    recipe.owner = user._id;
    await recipe.save();
    
    res.redirect(`/users/${user._id}/recipes/`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
