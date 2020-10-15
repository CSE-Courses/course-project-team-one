const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.get('/',(req,res) => res.send('UB Learns alternative'));

app.use('/users',require('./routes/users'));

// Listening to PORT 
app.listen(PORT,() => console.log(`server started on port ${PORT}`));