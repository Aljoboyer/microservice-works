import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import {userRoutes} from "./app/modules/users/routes/user.routes"

app.use("/api/v1", userRoutes);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
