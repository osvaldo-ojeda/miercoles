import { Router } from "express";
import connectionDb from "../connection/connectionDb.js";

const productRoutes = Router();

productRoutes.get("/", async (req, res) => {
  try {
    const query =
      "SELECT id, name, description, price, stock, category FROM  productos";
    const [data] = await connectionDb.query(query);
    console.log(`🚀 ~ productRoutes.get ~ data:`, data);
    res.status(200).send({ success: true, message: data });
  } catch (error) {
    res.status(400).send({ success: false, message: error });
  }
});

productRoutes.get("/:id", (req, res) => {
  res.send("get product by id");
});
productRoutes.post("/", (req, res) => {
  console.log(`🚀 ~ productRoutes.post ~ req:`, req.body);
  res.send("create product");
});

productRoutes.put("/:id", (req, res) => {
  res.send("update product by id");
});
productRoutes.delete("/:id", (req, res) => {
  res.send("delete product by id");
});

export default productRoutes;
