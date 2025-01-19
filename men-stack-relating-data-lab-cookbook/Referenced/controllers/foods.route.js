const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", async (req, res) => {
  const user = await User.findById(req.session.user._id);
  const foods = user.pantry;
  console.log(foods);
  res.render("foods/index.ejs", { foods, user });
});

router.get("/new", async (req, res) => {
  res.render("foods/new.ejs");
});

router.post("/", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    const newFood = req.body;

    user.pantry.push(newFood);
    await user.save();

    res.redirect(`/users/${user._id}/foods`);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:foodId", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    user.pantry.id(req.params.foodId).deleteOne();
    await user.save();
    res.redirect(`/users/${user._id}/foods`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:foodId/edit", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    const food = user.pantry.id(req.params.foodId);
    res.render("foods/edit.ejs", {food});
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.put("/:foodId", async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    const food = user.pantry.id(req.params.foodId);

    food.set(req.body)
    await user.save();
    
    res.redirect(`/users/${user._id}/foods`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
