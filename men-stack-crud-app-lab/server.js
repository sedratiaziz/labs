const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const Car = require("./models/car");

const methodOverride = require("method-override"); // new
const morgan = require("morgan"); //new

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // new
app.use(morgan("dev")); //new

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB!");
    console.log("DB Name: ", mongoose.connection.name);
  })
  .catch(() => {
    console.log("Error connecting to DB :(");
  });

// *** Under-the-hood stuff starts from here! ***

// show all cars
app.get("/cars", async (req, res) => {
  const allCars = await Car.find();
  res.render("allCars.ejs", { allCars: allCars });
});

// show the form for creating a new car
app.get("/cars/new", async (req, res) => {
  res.render("new.ejs");
});

// create a new car
app.post("/cars", async (req, res) => {
  await Car.create(req.body);
  res.redirect("/cars");
});

// show a car by it's id (from db)
app.get("/cars/:id", async (req, res) => {
  const foundCar = await Car.findById(req.params.id);
  res.render("oneCar.ejs", {foundCar});
});

// show a form to update a car
app.get("/cars/:id/edit", async (req, res) => {
    const foundCar = await Car.findById(req.params.id)
    res.render("edit.ejs", {foundCar})
});

// update a car by it's id (from db)
app.put("/cars/:id", async (req, res) => {
    await Car.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/cars`)
});

// delete a car by it's id (from db)
app.delete("/cars/:id", async (req, res) => {
    await Car.findByIdAndDelete(req.params.id)
    res.redirect("/cars")
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
