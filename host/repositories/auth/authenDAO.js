import bcrypt from "bcrypt";
import db from "../../services/db.js";
import jwt from "jsonwebtoken";

export const getLoginDAO = async ({ email, password }) => {
  try {
    const users = await findUserByEmail(email);
    const user = users[0];
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const role = user.role;
        const email = user.email;
        const token = jwt.sign(
          { id: user.id, role, email },
          process.env.JWT_SECRET,
          {
            expiresIn: "12h",
          }
        );

        return token;
      } else {
        throw new Error("Wrong password.");
      }
    } else {
      throw new Error("User not found.");
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const findUserByEmail = async (email) => {
  try {
    const [users] = await db.query(
      `SELECT u.id, u.email, r.name as role, password FROM elearning.users u LEFT JOIN elearning.roles r ON r.id  = u.role_id WHERE u.email = ?`,
      [email]
    );
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
