import express from "express";
import bodyParser from "body-parser";

import SwaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json" with {type: "json"};

import { api } from "../config.js";
import user from "./components/user/network.js"
import auth from "./components/auth/network.js"


const app = express();

app.use(bodyParser.json());

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use('/api-docs',SwaggerUi.serve, SwaggerUi.setup(swaggerDoc));

app.listen(api.port, () => {
  console.log("Api escuchando en el puerto ", api.port);
});
