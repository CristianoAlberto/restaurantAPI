import { Router } from "express";
import { MesaController } from "./MesaController";
import { MesaRepository } from "./MesaRepository";
import { auth_validate } from "../../middleware/auth";
const router = Router()
const controller = new MesaController(new MesaRepository())

router.get("/", auth_validate, controller.findAll);
router.get("/:id", auth_validate, controller.findById);
router.post("/criarMesa", auth_validate, controller.create);
router.put("/actualizar/:id", auth_validate, controller.update);
router.delete("/apagarMesa/:id", auth_validate, controller.delete);

export { router }