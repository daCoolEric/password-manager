const express = require('express');
const Accounts = require('../server/routes/accounts')

const app = express();

//middlewares
app.use(express.json());

const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.get("/api/:userID/accounts", Accounts);