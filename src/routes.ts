import express from "express";
import ClasssesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

//Modulo de roteamento do express
const routes = express.Router();
const classesControllers = new ClasssesController();
const connectionsControllers = new ConnectionsController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsControllers.index);
routes.post("/connections", connectionsControllers.create);

export default routes;
