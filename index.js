const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.route");

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "my-posts",
      description: "API documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`This app listening on port ${port}`);
});
