const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("./model/User");

router.post("/mail", (req, res) => {
  const name = req.body.name;

  const city = req.body.city;
  const email = req.body.email;
  const mobile = req.body.mobile;

  const description = req.body.description;

  console.log({ ...req.body });

  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arizgarments91@gmail.com",
      pass: "hkbz ihza gyvq hxoo",
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  const mail = {
    from: name,
    to: "arizgarments91@gmail.com",
    subject: "Ariz Help Box",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Mobile Number: ${mobile}</p>
       >
             <p>City: ${city}</p>
         
             <p>Business Details: ${description}</p>`,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error(error);
      res.json({ status: "ERROR" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ status: "Message Sent" });
    }
  });
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Email not found" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "arizgarments91@gmail.com",
        pass: "hkbz ihza gyvq hxoo",
      },
    });

    await transporter.sendMail({
      from: "arizgarments91@gmail.com",
      to: user.email,
      subject: "Your Password",
      text: `Your password is: ${user.password}`,
    });

    res.status(200).json({ message: "Password sent to your email" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
