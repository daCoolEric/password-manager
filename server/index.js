const express = require('express');
const mongoose = require('mongoose');
const accountsRoute = require('./routes/accounts');
const userRoute = require("./routes/users")

// configure dotenv
require('dotenv'). config();

const app = express();

//middlewares
app.use(express.json());

const PORT = 5500 || process.env.PORT;


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}))
  .catch((err) => console.log(err));




app.use("/api/user/:userID/accounts", accountsRoute);
app.use("/api/user", userRoute)