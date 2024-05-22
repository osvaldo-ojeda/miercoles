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
productRoutes.post("/", async (req, res) => {
  try {
    const query = "";
    const [data] = await connectionDb.query(query);
    console.log(`🚀 ~ productRoutes.get ~ data:`, data);
    res.status(200).send({ success: true, message: data });
  } catch (error) {
    res.status(400).send({ success: false, message: error });
  }
});

productRoutes.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, category } = req.body;
    const query = `UPDATE productos SET name=?, description=?, price=?, stock=?, category=? WHERE id=?`;
    const [data] = await connectionDb.query(query, [
      name,
      description,
      price,
      stock,
      category,
      id,
    ]);
    console.log(`🚀 ~ productRoutes.get ~ data:`, data);
    res.status(200).send({ success: true, message: data });
  } catch (error) {
    res.status(400).send({ success: false, message: error });
  }
});
productRoutes.delete("/:id", (req, res) => {
  res.send("delete product by id");
});

export default productRoutes;
