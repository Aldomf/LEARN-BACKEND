const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { titulo: "mi titulo dinamico" });
});

router.get("/services", (req, res) => {
  res.render("services", { tituloServicio: "my services page" });
});

router.get("/info", (req, res) => {
  res.render("info", { tituloInfo: "my info" });
});

module.exports = router;
