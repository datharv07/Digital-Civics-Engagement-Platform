import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

const corsOptions = {
  origin: 'http://localhost:5174',
  credentials: true,
};

app.use(cors(corsOptions));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5174");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
