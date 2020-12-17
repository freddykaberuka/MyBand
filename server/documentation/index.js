import swaggerJsDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
import { Router } from "express";

const docRouter = Router();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SWAGGER Documentation",
      version: "1.0.0",
      description: "My brand api Documentation",

      contact: {
        name: "freddy",
        url: "https://admiring-roentgen-beedb4.netlify.app/",
        email: "trojanx07@gmail.com",
      },
    },
    servers: [
      {
        url: "https://mybrands.herokuapp.com/",
      },
    ],
    produces: ["application/json"],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocument = swaggerJsDoc(options);

docRouter.use(
  "/",
  swaggerui.serve,
  swaggerui.setup(swaggerDocument, { explorer: true })
);

export default docRouter;