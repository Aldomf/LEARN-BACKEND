const express = require("express");
require("./database")
const app = express();


const port = process.env.PORT || 4000;

//template engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes middlewares
app.use("/api", require("./routes/routes"));
app.use("/api/pets", require("./routes/pets.routes"));

app.listen(port, () => {
  console.log("You are on port", port);
});
