const express = require('express');
const app = express();
require('dotenv');
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "client", "build")));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(port, () => console.log(`listening on port ${port}`))