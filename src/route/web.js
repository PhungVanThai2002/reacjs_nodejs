import express from "express";
import homeController from "../controllers/homeController";
import { getTestHomePage } from "../controllers/homeController";

let router = express.Router();
let initWebRoutes = (app) =>{
    router.get('/',homeController.getHomePage);

    router.get('/test',);
    return app.use("/",homeController.getTestHomePage);
}
module.exports = initWebRoutes;