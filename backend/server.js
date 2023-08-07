const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

app.listen(5000);
console.log(`server is running in port 5000`);
