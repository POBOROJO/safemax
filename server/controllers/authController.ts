import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

// Helper function to generate JWT token
const generateToken = (userId: string, email: string, role: string) => {
  return jwt.sign({ id: userId, email, role }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
};

// Register User/Admin
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, role = "user" } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Limit Total Number of Admin Accounts (optional)
    if (role === "admin") {
      const adminCount = await User.countDocuments({ role: "admin" });
      const MAX_ADMIN_ACCOUNTS = 5; // Configurable limit

      if (adminCount >= MAX_ADMIN_ACCOUNTS) {
        return res.status(403).json({
          message: "Maximum number of admin accounts reached",
        });
      }
    }

    // Password Strength Validation - Changed to 8 characters
    const passwordStrengthRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordStrengthRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      role,
    });

    // Save user
    await newUser.save();

    // Log admin account creation
    if (role === "admin") {
      console.log(`New admin account created: ${email}`);
    }

    // Generate token
    const token = generateToken(
      newUser._id.toString(),
      newUser.email,
      newUser.role,
    );

    // Respond with user details and token
    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);

    // Detailed error handling
    if (error instanceof Error) {
      return res.status(500).json({
        message: "Server error during registration",
        error: error.message,
      });
    }

    res
      .status(500)
      .json({ message: "Unexpected server error during registration" });
  }
};

// Login User/Admin
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user._id.toString(), user.email, user.role);

    // Respond with user details and token
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during login" });
  }
};

// Logout User/Admin
export const logoutUser = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

// Get Current User Profile
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    // req.user is set by the auth middleware
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      id: user._id,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching user profile" });
  }
};

// Update User Profile
export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Ensure only user can update their own profile
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update email
    if (email) {
      // Check if new email is already in use
      const existingUser = await User.findOne({ email });
      if (existingUser && existingUser._id.toString() !== req.user.id) {
        return res.status(400).json({ message: "Email already in use" });
      }
      user.email = email;
    }

    await user.save();

    res.json({
      id: user._id,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error updating profile" });
  }
};

// Change User Password
export const changePassword = async (req: Request, res: Response) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Find user by ID
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Validate new password strength
    const passwordStrengthRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!passwordStrengthRegex.test(newPassword)) {
      return res.status(400).json({
        message:
          "New password must be at least 12 characters long and include uppercase, lowercase, number, and special character",
      });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    // Update user password
    user.password = hashedNewPassword;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error changing password" });
  }
};
