import { Router } from "express";
import SalaController from "../controllers/sala.controller";


class SalaRoutes {
  router = Router();
  controller = new SalaController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar uma nova sala.
    this.router.post("/sala", this.controller.create);

    // Retornar as salas já cadastrados.
    this.router.get("/salas", this.controller.findAll);
  }
}

export default new SalaRoutes().router;