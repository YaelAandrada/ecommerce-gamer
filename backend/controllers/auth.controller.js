import User from "../models/User.js";
import bcrypt from "bcryptjs";

//Register

export const register = async (req, res) => {
  const { email, password } = req.body;

  //Buscamos si ya existe en la BD
  const exists = await User.findOne({ email });
  //Si existe devuelve error
  if (exists) return res.status(400).json({ msg: "Usuario ya existe" });

  //Esto encripta la contraseña
  const hash = await bcrypt.hash(password, 10);
  await User.create({ email, password: hash });

  res.json({ msg: "Usuario registrado" });
};

//Login

export const login = async (req, res) => {
  const { email, password } = req.body;

  //Buscamos al usuario por su email
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Usuario no existe" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(400).json({ msg: "Password incorrecta" });

  res.json({ msg: "Login OK", userId: user._id });
};
