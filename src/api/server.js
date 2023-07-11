const express = require('express');
const cors = require('cors');
const app = express();
const routes = require("./routes");

app.use(cors());

// Middleware to parse json requests
app.use(express.json());

// connect routes
app.use('/api', routes);

// Catch-all
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });

// start server
app.listen(8787, ()=> {
    console.log("API running on port 8787");
})