require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send("Server is active")
})


const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const portfolio = client.db('portfolio')
    const projects = portfolio.collection('projects-data')

    // api for getting all data
    app.get("/projects", async (req, res) => {
      const query = await projects.find({}).toArray()
      res.status(200).json(query)
    })
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})