const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5000;



// Middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.uys3vh8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function verifyJWT(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(401).send({message:'Unauthorized Access'})
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded){
        if (err) {
            res.status(403).send({message:'Forbidden Access'});
        }
        req.decoded = decoded;
        next();
    });
    // console.log(req.headers.authorization);
}

async function run(){
    try {
        const userCollection  = client.db('geniusCar').collection('services');
        const orderCollection = client.db('geniusCar').collection('orders');


        // JWT
        app.post('/jwt', (req, res) => {
            const user = req.body;
            // console.log(user);
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'});
            res.send({token});
        })

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

        // Order API & JWT
        app.get('/orders',verifyJWT, async (req, res) => {
            const decoded = req.decoded;
            console.log('inside orders API',decoded)
            if (decoded.email !== req.query.email) {
                res.status(403).send({message:'Unauthorized Access'});
            }
            // console.log(req.headers.authorization);

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
        app.post('/orders',verifyJWT, async (req, res) => {            
            const order = req.body;
            const result =  await orderCollection.insertOne(order);
            res.send(result);
        });

        // Delete
        app.delete('/orders/:id', verifyJWT, async (req, res) => {            
            const id =  req.params.id;
            const query = {_id: ObjectId(id) }
            const result = await orderCollection.deleteOne(query);
            res.send(result);
        });

        app.patch('/orders/:id', verifyJWT, async (req, res) => {
            const id =  req.params.id;
            const status = req.body.status;
            const query = {_id: ObjectId(id) }
            const updateDoc = {
                $set:{
                    status:status
                }
            }
            const result = await orderCollection.updateOne(query, updateDoc);
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




