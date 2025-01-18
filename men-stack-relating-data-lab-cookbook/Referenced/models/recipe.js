const express = require("express");
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  ingredients: [
    {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Ingredient"
    },
  ]
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
