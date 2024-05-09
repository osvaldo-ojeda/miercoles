import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  res.send("get all users");
});
userRoutes.get("/:id", (req, res) => {
  res.send("get user by id");
});
userRoutes.post("/", (req, res) => {
  res.send("create user");
});
userRoutes.put("/:id", (req, res) => {
  res.send("update user by id");
});
userRoutes.delete("/:id", (req, res) => {
  res.send("delete user by id");
});

export default userRoutes;
