import express from "express";
import routes from "./routes/routes.js";
import { errorNotFound } from "./midlewares/errorNotFound.js";
import connectionDb from "./connection/connectionDb.js";
import { SERVER_PORT } from "./config/config.js";
import cookieParser from "cookie-parser";
// import { roleSeed } from "./seed/roleSeed.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/app", routes);

app.use(errorNotFound);

await connectionDb.sync({ force: false });
// await roleSeed()

app.listen(SERVER_PORT, () => {
  console.log(`🚀 listen  ${SERVER_PORT}`);
});
