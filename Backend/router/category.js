const express = require("express");
const router = express.Router();
const Different = require("../model/category");

router.get("/category", (req, res) => {
  Different.find((err, products) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(products);
    }
  });
});

router.get("/category", (req, res) => {
  Different.findById(req.params.id, (err, product) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while fetching the product with id ${req.params.id}.`
        );
    } else {
      res.send(product);
    }
  });
});

router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const count = await Different.countDocuments({ category });
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/category", (req, res) => {
  const { category, subcategory, subcategories1, imageUrl } = req.body;

  console.log(
    `Adding category with name: ${category}, subcategory: ${subcategory}, subcategories1: ${subcategories1}, and imageUrl: ${imageUrl}.`
  );

  const categoryQuery = { "category.name": category };

  Different.findOne(categoryQuery, (err, existingCategory) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send("An error occurred while checking for the category.", err);
    } else if (existingCategory) {
      if (subcategory) {
        const subcategoryIndex =
          existingCategory.category.subcategory.findIndex(
            (subcat) => subcat.name === subcategory
          );
        if (subcategoryIndex !== -1) {
          if (subcategories1) {
            const subcat1Index = existingCategory.category.subcategory[
              subcategoryIndex
            ].subcategories1.findIndex(
              (subcat1) => subcat1.name === subcategories1
            );
            if (subcat1Index === -1) {
              // Push subcategories1 if not found
              existingCategory.category.subcategory[
                subcategoryIndex
              ].subcategories1.push({
                name: subcategories1,
              });
            }
          }
        } else {
          existingCategory.category.subcategory.push({
            name: subcategory,
            subcategories1: subcategories1
              ? [
                  {
                    name: subcategories1,
                  },
                ]
              : [],
          });
        }
      }

      if (imageUrl) {
        existingCategory.imageUrl = imageUrl;
      }

      existingCategory.save((err) => {
        if (err) {
          console.log(err);
          res
            .status(500)
            .send("An error occurred while updating the category.", err);
        } else {
          res.send("Category updated successfully.");
        }
      });
    } else {
      const newCategory = new Different({
        category: {
          name: category,
          subcategory: subcategory
            ? [
                {
                  name: subcategory,
                  subcategories1: subcategories1
                    ? [
                        {
                          name: subcategories1,
                        },
                      ]
                    : [],
                },
              ]
            : [],
        },
        imageUrl,
      });

      newCategory.save((err) => {
        if (err) {
          console.log(err);
          res
            .status(500)
            .send("An error occurred while adding the category.", err);
        } else {
          res.send("Category added successfully.");
        }
      });
    }
  });
});

module.exports = router;
