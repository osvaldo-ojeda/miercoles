import { Router } from "express";

const productRoutes = Router();

productRoutes.get("/");
productRoutes.get("/:id");
productRoutes.post("/");
productRoutes.put("/:id");
productRoutes.delete("/:id");

export default productRoutes;
