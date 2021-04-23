const Express = require("express");

const app = Express();

app.use("/tester", (req, res) => {
    console.log(req.headers);
    res.json({ headers: req.headers });
});

const PORT = 4000;

app.listen(PORT);

// `app.listen` is asynchronous, but it's probably fine
console.log("Probably listening on: " + PORT);
