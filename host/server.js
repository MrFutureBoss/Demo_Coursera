import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(cors());
const PORT = process.env.PORT || 9999;

app.use(bodyParser.json());
app.use('/api/courses', routes.courseRouter);
app.use('/api/lessons', routes.lessonRouter);
app.use('/api/sections', routes.takeSectionRouter);
app.use('/api/tests', routes.takeTestRouter);

app.get('/', (req, res) => {
  res.send('Backend MVC with MySQL is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});