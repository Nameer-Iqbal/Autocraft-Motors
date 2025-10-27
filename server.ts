import express from 'express';
import cors from 'cors';
import { connectDB } from './server/db/connection';
import carRoutes from './server/routes/carRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Greenway Motors API',
    endpoints: {
      health: '/api/health',
      cars: '/api/cars',
      featuredCars: '/api/cars/featured',
      searchCars: '/api/cars/search'
    }
  });
});

// Routes
app.use('/api/cars', carRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Greenway Motors API is running' });
});

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
