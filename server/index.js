import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/post.js";
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: "true" })); // maximum image size must be lower than 30Mb
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("Hello to memories API");
});
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
