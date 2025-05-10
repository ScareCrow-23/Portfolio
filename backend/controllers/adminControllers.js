import jwt from "jsonwebtoken";
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate credentials
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Create a token with a more meaningful payload
      const token = jwt.sign(email + password, process.env.JWT_SECRET);

      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Admin login error:", error);
    return res.json({ success: false, message: "Internal server error" });
  }
};
