// /tm-backend/src/seed.js

const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

// Sample user data
const users = [
  { name: 'John Doe', email: 'john@example.com', password: 'password123' },
  { name: 'Jane Smith', email: 'jane@example.com', password: 'password456' },
];

// Connect to MongoDB and insert sample data
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Connected to MongoDB. Seeding data...');
  await User.deleteMany({});
  await User.insertMany(users);
  console.log('Data seeded successfully.');
  mongoose.connection.close();
})
.catch((err) => console.error('Error seeding data:', err));

