import api from "./api";

export const getUsers = () => api.get("/users");
export const login = (data) => api.post("/auth/login", data);
