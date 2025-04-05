import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the subcription api')
})

app.listen(3000, () => console.log("server is listening on port: 3000"));
