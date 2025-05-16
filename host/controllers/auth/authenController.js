import { getLoginDAO, findUserByEmail, findUserById } from "../../repositories/auth/authenDAO.js";

export const getLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await getLoginDAO({ email, password });
        const user = await findUserByEmail(email);
        if (!user) {
          return res.status(404).json({ error: "User not found." });
        }
        res.cookie('accessToken', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 12 * 60 * 60 * 1000 // 12h
        });
        res.status(200).json({ user:{id:user[0].id, email:user[0].email, role:user[0].role}, token });
      } catch (error) {
        if (error.message === "Wrong password.") {
          return res.status(401).json({ error: error.message });
        }
        if (error.message === "User not found.") {
          return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
      }
}


export const logoutController = async (req, res) => {
  try {
    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      domain: 'localhost',
    });
    const tokenStillExists = !!req.cookies?.accessToken;
    res.status(200).json({ 
      message: "Logged out successfully.",
      tokenStillExists,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const profileController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await findUserById(userId);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};