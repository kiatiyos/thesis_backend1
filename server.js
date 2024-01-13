const express = require("express");
const app = express();
const port = 3000;
const Routers = require('./App/routes')

app.get('/', (req, res) => {
    res.send("hello! china");
});

app.use(express.json());
app.use('/api', Routers);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
