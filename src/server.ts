import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(port, () => {
    console.log("Servidos rodando em http://localhost:3000")
})