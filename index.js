const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./database");
const loginRoute = require("./routes/loginRoute");

const app = express();
app.use(bodyParser.json());

connectDB();

app.use("/login", loginRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
