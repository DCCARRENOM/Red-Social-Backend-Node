import express from "express";
import bodyParser from "body-parser";

import SwaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json" with {type: "json"};

import { api } from "../config.js";
import router from "./components/user/network.js"


const app = express();

app.use(bodyParser.json());

app.use("/api/user", router);
app.use('/api-docs',SwaggerUi.serve, SwaggerUi.setup(swaggerDoc));

app.listen(api.port, () => {
  console.log("Api escuchando en el puerto ", api.port);
});
