require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// Db connection
mongoose.connect(process.env.DB_URL)
.then(() => console.log("DB Connected"))
.catch((err) => console.log(err));



console.log("Server is running");