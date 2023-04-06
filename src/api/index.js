const express = require("express");
const cors = require("cors");

const education = require("../data/Education");
const experience = require("../data/Experience");
const projects = require("../data/Projects");
const images = require("../data/Images");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res)=> {
    res.send("MaxSealey.com API");
});

server.get("/education", (req, res)=> {
    res.send(education);
});

server.get("/experience", (req, res)=> {
    res.send(experience);
});

server.get("/projects", (req, res)=> {
    res.send(projects);
});

server.get("/images", (req, res)=> {
    res.send(images);
});

const port = process.env.PORT || 8787;

server.listen(port, console.log(`Server running on port ${port}`)); 