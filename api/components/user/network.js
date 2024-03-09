//Todas las response en el mismo archivo, capa de red

import { Router } from "express";

import handlerRespone from "../../../network/response.js";
import controller from "./index.js";

const router = Router();

router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", upsert);

function list(req, res) {
  controller.list()
    .then((lista) => {
      handlerRespone.success(req, res, lista, 200);
    })
    .catch((err) => {
      handlerRespone.error(req, res, err.message, 500);
    });
}

function get(req, res) {
  controller.get(req.params.id)
    .then((user) => {
      handlerRespone.succes(req, res, user, 200);
    })
    .catch((err) => {
      handlerRespone.error(req, res, err.message, 500);
    });
}

function upsert(req, res) {
  controller.upsert(req.body)
    .then((user) => {
      handlerRespone.succes(req, res, user, 200);
    })
    .catch((err) => {
      handlerRespone.error(req, res, err.message, 500);
    });
}

export default router;
