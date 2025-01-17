const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("community/index.ejs", { users });
});

router.get("/show", async (req, res) => {
    const user = await User.findById(req.session.user._id);
    res.render("community/show.ejs", { user });
});



module.exports = router;
