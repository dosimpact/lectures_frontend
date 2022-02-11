require("dotenv").config();

const express = require("express");
const app = express();
const productRoutes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "tdd",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("✔️ MongoDb Connected..."))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

app.listen(PORT, () => {
  console.log(`✔️ Running on  http://127.0.0.1:${PORT}`);
});

module.exports = app;
