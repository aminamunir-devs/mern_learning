import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Signup Service

export const signupService = async (userData) => {
  const { email, password } = userData;

  // Check if email already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  return user;
};

// Login Service
export const loginService = async (userData) => {
  const { email, password } = userData;

  // Find user
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT
  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  // Remove password before returning
 const userResponse = {
  _id: user._id,
  email: user.email,
  role: user.role,
};

  return {
    user: userResponse,
    token,
  };
};