<div align='center'>

# Genius Car
</div>

<p align='left'><i>[Server Section]</i></p>


## `Setup Server`
- First create a folder and then run this command for generating <i>package.json</i>
    ```bash
     npm init -y
    ```
- Secondly run this
    ```bash
     npm i express cors mongodb
    ```
- Third, [DotENV](https://www.npmjs.com/package/dotenv)
    ```bash
    npm install dotenv --save
    ```

- open <i>package.json</i> file and add the code (it's need for server) 
    ```bash
    "scripts": {
        "start":"node index.js",
    },
    ```

- create a index.js file and setup basic code 
    ```bash
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
    ```

- Run server
    ```bash
    nodemon index.js
    ```


