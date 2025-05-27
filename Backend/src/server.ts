import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import issueRoutes from './routes/Issue/issue.routes';
import projectRoutes from './routes/Project/project.routes';
import authRoutes from './routes/Auth/auth.routes';

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGODB_URI || '';

// Middlewares
app.use(cors());
app.use(express.json());

// Health check route
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Routes
app.use('/api', issueRoutes);
app.use('/api', projectRoutes);
app.use('/api', authRoutes);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });

export default app;
