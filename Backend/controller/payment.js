const crypto = require("crypto");
const Razorpay = require("razorpay");
const router = require("express").Router();
const Store = require("../model/Store");

router.post("/verification", async (req, res) => {
  // Do a validation
  const secret = "12345678";

  console.log(req.body);
  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("Request is legit");
    console.log(req.body);

    const payment = req.body;
    const time = new Date();
    const paymentD = {
      ...payment,
      paymentMade: time,
    };
    const id = req.body.payload.payment.entity.notes.id;
    const amountInRupee =
      parseInt(req.body.payload.payment.entity.amount) / 100;
    const walletCoin = amountInRupee / 10;

    if (id) {
      try {
        const storeData = await Store.findOne({ _id: id });

        await Store.findOneAndUpdate(
          { _id: id },
          {
            $push: {
              wallet: paymentD,
            },
            $set: {
              one24coin: storeData.one24coin + walletCoin,
            },
          },
          {
            new: true,
          }
        );

        console.log("Payment Processed !!");
      } catch (err) {
        console.error("Error processing payment:", err);
        return res.status(500).json({ error: "Error processing payment" });
      }
    }
  }

  res.json({ status: "ok" });
});

// Create Order

router.post("/create-order", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: "rzp_live_SJPTVSrz4jSo3g", // Replace with your Razorpay key ID
      key_secret: "O2CPOrABPhWUIf9Titxx6mM4", // Replace with your Razorpay key secret
    });

    const options = {
      amount: req.body.amount,
      currency: "INR",
      receipt: req.body.receipt,
      payment_capture: "1",
    };

    instance.orders.create(options, (err, order) => {
      if (err) {
        console.error("Error creating order:", err);
        return res.status(500).json({ error: "Error creating order" });
      } else {
        res.send(order);
      }
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ error: "Error creating order" });
  }
});

router.get("/order/:paymentId", async (req, res) => {
  const paymentId = req.params.paymentId;

  try {
    const storeData = await Store.findOne({
      "wallet.payload.payment.entity.id": paymentId,
    });

    if (!storeData) {
      return res.status(404).json({ error: "Order not found" });
    }

    const order = storeData.wallet.find(
      (item) => item.payload.payment.entity.id === paymentId
    );

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error("Error fetching order details:", error);
    res.status(500).json({ error: "Error fetching order details" });
  }
});

module.exports = router;
