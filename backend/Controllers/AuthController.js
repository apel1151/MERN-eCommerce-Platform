import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import User from "../Models/UserModel.js";

////////////////////sign up controller/////////////////////////
//jwt token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Please give all the information" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid." });
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ error: "Password is not strong enough" });
  }

  try {
    const exists = await User.findOne({ email });
    if (!exists) {
      const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      const token = createToken(newUser._id);
      res.status(200).json({ email, token });
    } else {
      return res.status(400).json({ error: "Email already in use. Please Login" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};


////////////////////login controller/////////////////////////


export const login = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: "Please provide both email and password" });
    }
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return res.status(400).json({ error: "User not found" });
      }
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
        return res.status(400).json({ error: "Password doesn't match" });
      } else {
        // return res.status(200).json({email, token});
        const token = jwt.sign({ id: validUser._id }, process.env.SECRET);
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        return res.cookie('access_token', token, {httpOnly: true, expires: expiryDate}).status(200).json(rest);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  