const express = require("express");
const router = express.Router();

const Ingredient = require("../models/ingredient");
const User = require("../models/User");

router.get("/", async (req, res) => {
  const ingredients = await Ingredient.find();
  res.render("ingredients/index.ejs", { ingredients });
});

router.get("/new", async (req, res) => {
  res.render("ingredients/new.ejs");
});

router.post("/", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    const newIngredient= req.body;

    await Ingredient.create(newIngredient);

    res.redirect(`/users/${user._id}/ingredients`);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:ingredientId", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    const ingredient = await Ingredient.findById(req.params.ingredientId);
    
    await ingredient.deleteOne();
    res.redirect(`/users/${req.session.user._id}/ingredients`);

  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:ingredientId/edit", async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.ingredientId);
    res.render("ingredients/edit.ejs", {ingredient});

  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.put("/:ingredientId", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    const ingredient = await Ingredient.findById(req.params.ingredientId);

    ingredient.set(req.body)
    await ingredient.save();

    res.redirect(`/users/${user._id}/ingredients`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
