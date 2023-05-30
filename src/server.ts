import express from "express";
import { PrismaClient } from "@prisma/client";

const port = 3000;
const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(port, () => {
    console.log("Servidos rodando em http://localhost:3000");
});