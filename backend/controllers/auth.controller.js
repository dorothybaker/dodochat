import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { fullName, username, email, password, gender } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 12);

    // CHECKING EXISTING USER
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json("Username already taken!");
    }

    // AVATAR PROFILES
    const maleProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // CREATING NEW USER
    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? maleProfile : femaleProfile,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json("Invalid user data!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // GETTING THE USER
    const user = await User.findOne({ username });
    const isCorrectPassword = bcrypt.compareSync(password, user.password || "");
    if (!user || !isCorrectPassword) {
      return res.status(401).json("Incorrect username or password!");
    }

    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json("Logged out successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};
