import express from "express";
import routes from "./routes/routes.js";
import morgan from "morgan";
// import { methodLoger } from "./midlewares/methodLoger.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// app.use(morgan("tiny"));
// app.use(methodLoger);
// app.use("/app", methodLoger, routes);
app.use("/app", routes);
// app.use(methodLoger);

app.listen(8080, () => {
  console.log(`🚀 listen `);
});

