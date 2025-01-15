const express = require("express");
const router = express.Router();

const User = require("../models/User")


router.get("/", async (req, res) => {
    res.render("foods/index.ejs")
})







module.exports = router;
