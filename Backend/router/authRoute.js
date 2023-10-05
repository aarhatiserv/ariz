const router = require("express").Router();
const Auth = require("../model/Auth");
const jwt = require("jsonwebtoken");

// New User
router.post("/register", async (req, res) => {
  // Validating Data
  if (!req.body) return res.status(400).send("Error in Data");

  //Checking if the user is already in the database
  const emailExist = await Auth.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already Exist");

  //Checking if the user is already in the database
  const userNameExist = await Auth.findOne({ username: req.body.username });
  if (userNameExist) return res.status(400).send("Username already Exist");

  //Create a new user
  const user = new Auth({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  console.log(user);
  try {
    const savedUser = await user.save();
    res.send({ statusCode: 201, user: user.id, savedUser: savedUser });
  } catch (err) {
    res.status(404).send(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  // Validating Data
  if (!req.body) return res.status(400).send("Error in Data");

  //Checking if the user is already in the database
  const user = await Auth.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("email does not Exist");

  //Password is Correct
  const validPass = req.body.password === user.password;
  if (!validPass) return res.status(400).send("Invalid Password");

  var TOKEN_SECRET = "secret123@123";

  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, TOKEN_SECRET);
  res
    .header("auth-token", token)
    .send({ statusCode: 200, user: user, token: token });
  // res.send('Logged In');
});

router.get("/all-user", async (req, res) => {
  const users = await Auth.find();
  if (users) {
    res.send({
      statusCode: 200,
      data: users,
    });
  } else {
    res.send("Error in Fetching Data.");
  }
});

module.exports = router;
