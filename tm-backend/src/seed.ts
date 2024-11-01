import mongoose from 'mongoose';
import User, { IUser } from './models/User';
import dotenv from 'dotenv';

dotenv.config();

const users = [
  { name: 'John Doe', email: 'john@example.com', password: 'password123' },
  { name: 'Jane Smith', email: 'jane@example.com', password: 'password456' },
];

// Connect to MongoDB and insert sample data
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(async () => {
    console.log('Connected to MongoDB. Seeding data...');
    await User.deleteMany({});
    await User.create(users);
    console.log('Data seeded successfully.');
    mongoose.connection.close();
  })
  .catch((err) => console.error('Error seeding data:', err));

