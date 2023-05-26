// dataBase connection
require('dotenv').config()
const mongoose = require("mongoose");

const uri = `mongodb+srv://alditomiralles3:${process.env.PASSWORD}@aldo.l3up4qv.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected!"))
  .catch((e) => console.log(e));
