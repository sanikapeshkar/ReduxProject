import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import issueRoutes from './routes/Issue/issue.routes';
import projectRoutes from './routes/Project/project.routes'
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/api', issueRoutes)
app.use('/api', projectRoutes)
export default app;
