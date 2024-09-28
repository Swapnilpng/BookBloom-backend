const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./connection/connection");
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const cart = require("./routes/cart");
const Order = require("./routes/order");

app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", cart);
app.use("/api/v1", Order);
// creating port
app.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`);
});
