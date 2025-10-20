export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({
      message: 'Login successful',
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred during login',
      error: error
    });
  }
};
