const express = require("express");
const router = express.Router();

const { OrderItem, Order } = require("../model/orders");
const User = require("../model/User");

function generateNumericOrderId() {
  const randomNumericId = Math.floor(Math.random() * 100000); // Generate a random numeric ID
  return randomNumericId;
}

router.post("/orders", async (req, res) => {
  try {
    const { userDetails, totalPrice, orderItems, userId } = req.body;
    console.log(req.body);
    const orderId = generateNumericOrderId();
    const order = new Order({
      orderId,
      userDetails,
      totalPrice,
      userId,
      orderItems,
    });

    const savedOrder = await order.save();
    sendOrderEmail({
      ...req.body,
      orderID: savedOrder.orderId,
    });

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().populate("orderItems.productId");
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/order/:id", (req, res) => {
  const { productName, price, customerName, quantity, shippingAddress } =
    req.body;

  Order.findByIdAndUpdate(
    req.params.id,
    {
      productName,

      price,
      customerName,
      shippingAddress,
      quantity,
    },
    (err, cart) => {
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

router.delete("/order/:userId/:itemId", (req, res) => {
  const { userId, itemId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Find the index of the cart item in the user's cart array
      const itemIndex = user.cart.findIndex(
        (item) => item._id.toString() === itemId
      );

      if (itemIndex === -1) {
        return res.status(404).json({ error: "Cart item not found" });
      }

      // Remove the item from the cart array
      user.cart.splice(itemIndex, 1);

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

// const router = require("express").Router();
const nodemailer = require("nodemailer");
const shortid = require("shortid");

// router.use((req, res, next) => {
//   // Middleware logic here
//   next(); // Call next to pass control to the next middleware or route handler
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "infocrossangleinterior@gmail.com",
    pass: "jllgzovojhzbexkn",
  },
});

function sendOrderEmail(body) {
  // router.post("/send-email", (req, res) => {
  const { userDetails, cartProducts, totalPrice, orderID } = body;
  console.log(body);
  const emailContent = `
  Order ID: ${orderID}

    User Details:
    Name: ${userDetails.name}
    Email: ${userDetails.email}
    Address: ${userDetails.address}
    State: ${userDetails.state}
    Zip: ${userDetails.zip}

    Items in Cart:
    ${cartProducts
      ?.map(
        (product) => `
      Product Name: ${product.productName}
      Price: Rs. ${product.price}
      Quantity: ${product.quantity}
      <img src="data:image/jpeg;base64,${product.imageBase64}" alt="${product.productName}" style="max-width: 100px; margin-top: 10px;">

    `
      )
      .join("\n\n")}
    
    Total Price: Rs. ${totalPrice}

   
  `;

  const mailOptions = {
    from: "shashankranjan970832@gmail.com",
    to: "shashankranjan970832@gmail.com",
    subject: "Order Details",
    text: emailContent,
    html: ` <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
    <div style="background-color: #f5f5f5; padding: 20px; border-bottom: 2px solid #ddd;">
      <h2 style="font-size: 24px; margin-bottom: 10px;">Order Received 👋</h2>
      <p style="font-size: 16px;">Dear Seller,</p>
      <p style="font-size: 16px;">Order ID: <strong>${orderID}</strong> has been received.</p>
   
      <p class="text-lg">From:</p>
      <ul class="list-none p-0">
        <li><strong>Name:</strong> ${userDetails.name}</li>
        <li><strong>Email:</strong> ${userDetails.email}</li>
        <li><strong>Address:</strong> ${userDetails.address}</li>
        <li><strong>State:</strong> ${userDetails.state}</li>
        <li><strong>Zip:</strong> ${userDetails.zip}</li>
      </ul>
    <div style="padding: 20px; border-bottom: 2px solid #ddd;">
      <h3 style="font-size: 20px; margin-bottom: 20px;">Order Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="text-align: left; padding: 8px;">Product Name</th>
            <th style="text-align: right; padding: 8px;">Price</th>
            <th style="text-align: right; padding: 8px;">Quantity</th>
            <th style="text-align: right; padding: 8px;">Subtotal</th>
            <th style="text-align: right; padding: 8px;">Image</th>
          </tr>
        </thead>
        <tbody>
          ${cartProducts
            .map(
              (product) => `
              <tr>
                <td style="text-align: left; padding: 8px;">${
                  product.productName
                }</td>
                <td style="text-align: right; padding: 8px;">Rs. ${
                  product.price
                }</td>
                <td style="text-align: right; padding: 8px;">${
                  product.quantity
                }</td>
                <td style="text-align: right; padding: 8px;">Rs. ${
                  product.price * product.quantity
                }</td>
                <td style="text-align: right; padding: 8px;"><img src="data:image/jpeg;base64,${
                  product.imageBase64
                }" alt="${product.productName}" style="max-width: 100px;"></td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
      <div style="display: flex; justify-content: end; margin-top: 20px;">
        <strong style="font-size: 15px;">Total Amount: Rs. ${totalPrice.toFixed(
          2
        )}</strong>
      </div>
    </div>
    <div style="padding: 20px;">
     
      <p style="font-size: 16px;">Thank You,</p>

    </div>
  </div>
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      // res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      // res.status(200).send("Email sent successfully");
    }
  });
}
