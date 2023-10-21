const express = require("express");
const router = express.Router();

const Fav = require("../model/fav");
const User = require("../model/User");

router.get("/fav/:id", (req, res) => {
  User.findById(req.params.id, { fav: 1, _id: 0 }, (err, fav) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the cart.");
    } else {
      res.status(200).send(fav);
    }
  });
});

router.get("/fav/:id", (req, res) => {
  User.find((err, fav) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(fav);
    }
  });
});

router.post("/fav/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { productName, price, imageUrl, productSku, color, size } = req.body;

  const fav = new Fav({
    productName,
    price,
    imageUrl,
    color,
    size,
    productSku,
  });

  User.findOneAndUpdate({ _id: id }, { $push: { fav: fav } }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the product.");
    } else {
      res.send("Product added successfully.");
    }
  });
});

router.put("/fav/:id", (req, res) => {
  const { productName, price, productSku, color, size, imageUrl } = req.body;

  Fav.findByIdAndUpdate(
    req.params.id,
    {
      productName,
      productSku,
      price,
      color,
      size,
      imageUrl,
    },
    (err, fav) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send(
            `An error occurred while updating the product with id ${req.params.id}.`
          );
      } else {
        res.send("Product updated successfully.");
      }
    }
  );
});

router.delete("/fav/:userId/:itemId", (req, res) => {
  const { userId, itemId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Find the index of the cart item in the user's cart array
      const itemIndex = user.fav.findIndex(
        (item) => item._id.toString() === itemId
      );

      if (itemIndex === -1) {
        return res.status(404).json({ error: "Cart item not found" });
      }

      // Remove the item from the cart array
      user.fav.splice(itemIndex, 1);

      // Save the updated user object
      return user.save();
    })
    .then(() => {
      console.log(`Cart item with ID ${itemId} deleted successfully`);
      res.json({ message: "Cart item deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to delete cart item", err: err });
    });
});

module.exports = router;
