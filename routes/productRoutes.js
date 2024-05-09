import { Router } from "express";

const productRoutes = Router();

productRoutes.get("/", (req, res, next) => {
  res.send("get all products");
  next()
});
productRoutes.get("/:id", (req, res) => {
  res.send("get product by id");
});
productRoutes.post("/", (req, res) => {
  console.log(`🚀 ~ productRoutes.post ~ req:`, req.body)
  res.send("create product");
});

productRoutes.put("/:id", (req, res) => {
  res.send("update product by id");
});
productRoutes.delete("/:id", (req, res) => {
  res.send("delete product by id");
});

export default productRoutes;
