import express from "express";
import userController from "./controller/userController.js"

const routes = express();

routes.use('/user', userController); // Define a rota user referente ao userController

export default routes;