
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


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
      try {
        const query = await projects.find({}, { projection: { desc: 0 } }).toArray()
        res.status(200).json(query)
      } catch {
        res.status(404).json({ message: "data not found" })
      }

    })


    // api for project details
    app.get("/projects/:id", async (req, res) => {
      try {
        const id = req.params.id
        console.log(id)
        const query = await projects.findOne({ _id: new ObjectId(id) })
        res.status(200).json(query)
      }
      catch { }
    })
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})