const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("community/index.ejs", { users });
});

router.get("/:memberId/show", async (req, res) => {
    const member = await User.findById(req.params.memberId);
    console.log(member)
    res.render("community/show.ejs", { member });
});



module.exports = router;
