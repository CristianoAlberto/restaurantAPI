import { Router } from "express";
import { UsuarioController } from "./UsuarioController";
import { UsuarioRepository } from "./UsuarioRepository";
import { auth_validate } from "../../middleware/auth";
const router = Router();
const controller = new UsuarioController(new UsuarioRepository());
router.post("/signup", controller.signUp)
router.post("/login", controller.login)
router.get("/findMe/:id", auth_validate, controller.findMe)
router.put("updateMe/:id", auth_validate, controller.updateMe)
export { router }