const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/subscribe", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

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
    subject: "User Subscribe for the newsletter",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>`,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error(error); // Log the error
      res.json({ status: "ERROR" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router;
