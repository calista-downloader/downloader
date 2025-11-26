import express from "express";
import fetch from "node-fetch";
const app = express();

app.get("/api/tiktok", async (req, res) => {
    const url = req.query.url;
    const api = await fetch("https://tikwm.com/api/?url=" + url);
    const data = await api.json();
    res.json(data);
});

app.get("/api/facebook", async (req, res) => {
    const url = req.query.url;
    const api = await fetch("https://api.savefb.app/api/download?url=" + url);
    const data = await api.json();
    res.json(data);
});

app.listen(3000, () => console.log("Server berjalan di port 3000"));
