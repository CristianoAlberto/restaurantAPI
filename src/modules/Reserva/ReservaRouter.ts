import { Router } from "express";
import { ReservaController } from "./ReservaController";
import { ReservaRepository } from "./ReservaRepository";

const router = Router();
const controller = new ReservaController(new ReservaRepository())

router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/criarReserva", controller.create);
router.put("/actualizar/:id", controller.update);
router.delete("/apagarReserva/:id", controller.delete);

export { router };