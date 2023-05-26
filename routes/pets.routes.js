const express = require("express");
const router = express.Router();

const Pet = require("../models/pet");

router.get("/", async (req, res) => {
  try {
    const arrayPetsDB = await Pet.find();
    res.render("pets", {
      arrayPets: arrayPetsDB,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const body = req.body;
  try {
    //primer método
    // const petDB = new Pet(body);
    // await petDB.save();

    //segundo método
    await Pet.create(body);

    res.redirect("/api/pets");
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const petDB = await Pet.findOne({ _id: id });
    res.render("detail", {
      pets: petDB,
      error: false,
    });
    console.log(petDB);
  } catch (error) {
    console.log(error);
    res.render("detail", {
      message: "ID NOT FOUNDED",
      error: true,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const petDB = await Pet.findByIdAndDelete({_id:id})

    if (petDB) {
      res.json({
        status: true,
        message: "Deleted"
      })
    } else {
      res.json({
        status: false,
        message: "Deleted failed"
      })
    }
  } catch (error) {
    console.log(error)
  }
});

router.put("/:id", async(req, res) => {
  const id = req.params.id
  const body = req.body
  try {
    const petDB = await Pet.findByIdAndUpdate(id, body)
    console.log(petDB)

    res.json({
      status: true,
      message: "Edited"
    })
  } catch (error) {
    console.log(error)
    res.json({
      status: false,
      message: "Edited failed"
    })
  }
})

module.exports = router;
