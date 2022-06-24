const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://FasTik:Tbt3SS6s36@cluster0.t7hx9yq.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('AIP');
    const users = database.collection('Users');

    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'Mariya' };
    const user = await users.findOne(query);

    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);