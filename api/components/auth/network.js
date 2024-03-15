import { Router } from "express";

import handlerRespone from "../../../network/response.js";
import controller from "./index.js";
import response from "../../../network/response.js";

const router = Router();

router.post("/login", function (req, res) {
  controller
    .login(req.body.username, req.body.password)
    .then((token) => {
      handlerRespone.success(req, res, token, 200);
    })
    .catch((e) => {
      handlerRespone.error(req, res, e.message, 400);
    });
});

export default router;
