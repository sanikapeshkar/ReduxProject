import express from "express";
import { User } from "../../models/User/user.model";
import bcrypt from "bcryptjs";

const router = express();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User already exists" });
      const hashpassword = bcrypt.hash(password, 10);
      user = new User({
        name,
        email,
        password: hashpassword,
      });
      await user.save();
    }
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});
