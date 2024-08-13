const express = require('express');
const cors = require('cors');
const app = express();
const routes = require("./routes");
const dotenv = require('dotenv');
const emailjs = require('emailjs-com');

dotenv.config();

app.use(cors());

// Middleware to parse json requests
app.use(express.json());

// connect routes
app.use('/api', routes);

  // emailjs
  app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    console.log('Received email request:', { name, email, subject, message });

    const templateParams = {
        name,
        email,
        subject,
        message,
    };

    emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.EMAILJS_USER_ID
    )
    .then((response) => {
        console.log('EmailJS response:', response.status, response.text);
        res.status(200).json({ success: true });
    })
    .catch((error) => {
        console.error('EmailJS error:', error);
        res.status(500).json({ success: false, error: error.text });
    });
});

// Catch-all
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// start server
app.listen(8787, ()=> {
    console.log("API running on port 8787");
})