const express = require("express");
const router = express.Router();

const Review = require("../model/Review");

router.get("/review", (req, res) => {
  Review.find((err, users) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the users.");
    } else {
      res.send(users);
    }
  });
});

router.get("/review", (req, res) => {
  Review.findById(req.params.id, (err, user) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while fetching the user with id ${req.params.id}.`
        );
    } else {
      res.send(user);
    }
  });
});

router.post("/review", (req, res) => {
  const { customerName, date, rating, remarks } = req.body;

  const review = new Review({
    customerName,
    date,
    rating,
    remarks,
  });

  review.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the user.", err);
    } else {
      res.send("User added successfully.");
    }
  });
});

module.exports = router;
