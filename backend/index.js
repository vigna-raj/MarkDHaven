const connectToDb = require("./db")
connectToDb();
const express = require('express')
const app = express()
const port = 5000
app.use(express.json())
//Available routes
app.use('/auth', require('./routes/auth'));
app.use('/note', require('./routes/note'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})