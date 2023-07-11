const express = require('express');
const router = express.Router();

router.get('/projectdata',(req,res)=>{
    const data = require("../data/Projects");
    res.json(data);
});

router.get('/educationdata', (req,res)=>{
    const data = require("../data/Education");
    res.json(data);
});

router.get('/experiencedata', (req, res) => {
    const data = require("../data/Experience");
    res.json(data);
});


module.exports = router;