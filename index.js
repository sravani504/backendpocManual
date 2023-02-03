import express from "express";
import cors from "cors";
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import post from "./routers/Post.js";

const app = express();
app.use(bodyParser.json())
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());


app.use("/posts", post);

const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message))

