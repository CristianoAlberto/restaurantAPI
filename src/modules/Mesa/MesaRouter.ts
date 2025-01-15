import { Router } from "express";
import { MesaController } from "./MesaController";
import { MesaRepository } from "./MesaRepository";
const router = Router()
const controller = new MesaController(new MesaRepository())

router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/criarMesa", controller.create);
router.put("/actualizar/:id", controller.update);
router.delete("/apagarMesa/:id", controller.delete);

export { router }