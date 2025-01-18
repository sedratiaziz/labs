const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Recipe = require("../models/recipe");

router.get("/", async (req, res) => {
  const user = await User.findById(req.session.user._id);
  const recipes = await Recipe.find();
  
  res.render("recipes/index.ejs", { recipes });
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
    await Recipe.save();

    res.redirect("/recipes");
  } catch (error) {
    console.log(error);
  }
});

// router.delete("/:foodId", async (req, res) => {
//   try {
//     const user = await User.findById(req.session.user._id);
//     user.pantry.id(req.params.foodId).deleteOne();
//     await user.save();
//     res.redirect(`/`);
//   } catch (error) {
//     console.log(error);
//     res.redirect("/");
//   }
// });

// router.get("/:foodId/edit", async (req, res) => {
//   try {
//     const user = await User.findById(req.session.user._id);
//     const food = user.pantry.id(req.params.foodId);
//     res.render("foods/edit.ejs", {food});
//   } catch (error) {
//     console.log(error);
//     res.redirect("/");
//   }
// });

// router.put("/:foodId", async (req, res) => {
//   try {
//     const user = await User.findById(req.session.user._id);
//     const food = user.pantry.id(req.params.foodId);

//     food.set(req.body)
//     await user.save();
    
//     res.redirect(`/users/${currentUser._id}/foods/${req.params.foodId}`);
//   } catch (error) {
//     console.log(error);
//     res.redirect("/");
//   }
// });

module.exports = router;
