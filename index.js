import express from "express";
import cors from "cors";
import driverRouter from "./routes/driverRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Obby is working here");
});

app.use("/drivers", driverRouter);

mongoose
  .connect(
    "mongodb+srv://sanminaung:sanminaung@tuktuk.ethfj8h.mongodb.net/TukTuk_Database?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Obby now get the Data");
    app.listen(3000, () => {
      console.log("Obby is listening to port-[3000]");
    });
  })
  .catch((error) => {
    console.log(error);
  });
