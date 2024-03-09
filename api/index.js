import express from "express";
import bodyParser from "body-parser";


import { api } from "../config.js";
import router from "./components/user/network.js"


const app = express();

app.use(bodyParser.json());

app.use("/api/user", router);

app.listen(api.port, () => {
  console.log("Api escuchando en el puerto ", api.port);
});
