const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.route");

app.use(bodyParser.json());
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`This app listening on port ${port}`);
});
