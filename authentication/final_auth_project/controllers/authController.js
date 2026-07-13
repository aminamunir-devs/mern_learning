import { signupService, loginService } from "../services/authService.js";
export const signup = async (req, res) => {
  try {
    const user = await signupService(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
  console.error("Signup Error:");
  console.error(error);

  res.status(400).json({
    success: false,
    message: error.message,
  });
}
};

// login controller

export const login = async (req, res) => {
  try {
    const result = await loginService(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to your profile",
    user: req.user,
  });
};