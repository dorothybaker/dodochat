import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  const loggedInUser = req.user._id;

  try {
    const users = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
