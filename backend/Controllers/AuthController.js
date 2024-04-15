const User = require("../Models/UserModel");
const { createSecretToken } = require("../Util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  console.log('user email', req.body.email);
  console.log('user password:', req.body.password)
  try {
    var { email, password, username } = req.body;

    password = await bcrypt.hash(password, 12);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.json({message:'Incorrect  email' }) 
      }
      console.log(user.password);
      console.log(password);
      console.log(await bcrypt.compare(password, user.password));
      const auth = await bcrypt.compare(password, user.password)
      if (!auth) {
        return res.json({message:'Incorrect password' }) 
      }
       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "User logged in successfully", success: true });
       next()
    } catch (error) {
      console.error(error);
    }
  }