const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/email", (req, res) => {
  const name = req.body.name;
  const job = req.body.job;
  const email = req.body.email;
  const description = req.body.description;
  const experience = req.body.experience;
  const location = req.body.location;
  const company = req.body.company;
  const resume = req.body.resume;
  const type = req.body.type;

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
    subject: "Job Hiring",
    html: `<p>Name: ${name}</p>
    <p>Job: ${job}</p>
             <p>Email: ${email}</p>
             <p>Description: ${description}</p>
             <p>Experience: ${experience}</p>
             <p>Location: ${location}</p>
             <p>Company: ${company}</p>
             <p>Type: ${type}</p>
             <p>Resume: ${resume}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

module.exports = router;
