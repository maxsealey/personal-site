import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import dotenv from 'dotenv';
import emailjs from 'emailjs-com';

dotenv.config();

const app = express();
const router = express.Router();

app.use(cors());

// Middleware to parse json requests
app.use(express.json());

router.get('/projectdata',(req,res)=>{
  const data = require("../../src/data/Projects");
  res.json(data);
});

router.get('/educationdata', (req,res)=>{
  const data = require("../../src/data/Education");
  res.json(data);
});

router.get('/experiencedata', (req, res) => {
  const data = require("../../src/data/Experience");
  res.json(data);
});


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

app.use('/api', router);

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

export const handler = serverless(app);