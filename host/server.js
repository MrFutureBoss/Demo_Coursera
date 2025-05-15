import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();
const PORT = process.env.PORT || 9999;

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', routes.authenRouter);
app.use('/api/courses', routes.courseRouter);
app.use('/api/lessons', routes.lessonRouter);
app.use('/api/sections', routes.takeSectionRouter);
app.use('/api/tests', routes.takeTestRouter);
app.use('/api/classes', routes.classRouter);

// Custom error handling middleware
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('Backend MVC with MySQL is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
