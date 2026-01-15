const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = 3000;
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Server is active")
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})