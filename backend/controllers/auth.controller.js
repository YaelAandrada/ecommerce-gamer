import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: "Usuario ya existe" });

    const user = new User({ username, email, password });
    await user.save(); 

    res.status(201).json({ msg: "Usuario guardado en MongoDB" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error servidor" });
  }
};
