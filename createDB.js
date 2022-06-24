const { MongoClient } = require("mongodb");

var data = require("./data.js").data

const uri =
  "mongodb+srv://FasTik:Tbt3SS6s36@cluster0.t7hx9yq.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('AIP');
    database.dropDatabase()
    const users = database.collection('Users');

    const result = await users.findOne(data);

    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run()