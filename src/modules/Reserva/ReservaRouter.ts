import { Router } from "express";
import { ReservaController } from "./ReservaController";
import { ReservaRepository } from "./ReservaRepository";
import { auth_validate } from "../../middleware/auth";

const router = Router();
const controller = new ReservaController(new ReservaRepository())

router.get("/", auth_validate, controller.findAll);
router.get("/:id", auth_validate, controller.findById);
router.post("/criarReserva", auth_validate, controller.create);
router.put("/actualizar/:id", auth_validate, controller.update);
router.delete("/apagarReserva/:id", auth_validate, controller.delete);

export { router };