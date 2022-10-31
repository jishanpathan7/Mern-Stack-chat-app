const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generateToken = require("../config/generateToken");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Please fill all the fields");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).send("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).send("User not created");
  }
});


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
 if(user && await user.matchPassword(password, user.password)) {
    return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
    });
 } else {
    return res.status(401).send("Invalid email or password");
 }
}
);

const allUsers = asyncHandler(async (req, res) => {
  const keyword= req.query.search ? {
  $or: [
    { name: { $regex:req.query.search, $options: "i" } },
    { email: { $regex:req.query.search, $options: "i" } },
  ],
} : {};

const users = await User.find(keyword).find({_id: {$ne: req.user._id}});
  if (users) {
    return res.status(200).json(users);
  } else {
    return res.status(400).send("No users found");
  }
}) 
module.exports = {
  registerUser,
  authUser,
  allUsers,
};