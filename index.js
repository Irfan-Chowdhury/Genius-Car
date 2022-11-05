const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();


// Middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uys3vh8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try {
        const userCollection  = client.db('geniusCar').collection('services');
        const orderCollection = client.db('geniusCar').collection('orders');

        // Read
        app.get('/services', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const services  = await cursor.toArray();
            res.send(services);
        });

        // Show
        app.get('/services/:id', async (req, res) => {
            const id =  req.params.id;
            const query = {_id: ObjectId(id) }
            const service = await userCollection.findOne(query);
            res.send(service);
        });

        // Order API
        app.get('/orders', async (req, res) => {
            let query  = {};
            if (req.query.email) {
                query = {
                    email: req.query.email
                }
            }
            const cursor = orderCollection.find(query);
            const orders =  await cursor.toArray();
            res.send(orders);
        });

        // Create
        app.post('/orders', async (req, res) => {
            const order = req.body;
            const result =  await orderCollection.insertOne(order);
            res.send(result);
        });



    } finally {
        
    }
}
run().catch(console.dir);


// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });









app.get('/', (req, res) => {
    res.send('Genius Car server is running');
});

app.listen(port, () =>{
    console.log('Genius Car Server running on port', port);
});




