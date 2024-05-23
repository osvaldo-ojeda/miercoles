import express from "express";
import routes from "./routes/routes.js";
import { errorNotFound } from "./midlewares/errorNotFound.js";
import User from "./Models/User.js";
import connectionDb from "./connection/connectionDb.js";


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/app", routes);

app.use(errorNotFound);

await connectionDb.sync({force:false})

app.listen(8080, () => {
  console.log(`🚀 listen `);
});
