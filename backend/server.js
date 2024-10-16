import express from "express"
import { MongoClient } from 'mongodb'
import 'dotenv/config'
import bodyParser from "body-parser"
import cors from "cors";
console.log(process.env.MONGO_URI)
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'PasswordManager';
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())
client.connect();

// getting the data  
app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('Password');
  const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

//sending the data 
app.post('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('Password');
  const findResult = await collection.insertOne(password)
  res.send({ succes: true , result : findResult  })
})

// deleting the data 

app.delete('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('Password');
  const findResult = await collection.deleteOne(password)
  res.send({ succes: true , result : findResult  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})