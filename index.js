const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Genius Car server is running');
});

app.listen(port, () =>{
    console.log('Genius Car Server running on port', port);
});