<div align='center'>

# Genius Car
</div>

<p align='left'><i>[Server Section]</i></p>

## `MODULE LIST`
- 67-1 Recap set login and set basic server
- 67-2 Use Dot Env To Hide Credentials And Insert Data In Database

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
- Remove a attribute id from a file
    ```bash
    CTRL + D
    & then
    Home + Shift + -> + Backspace
    ```

- Sometime need to acces. Please goto <b> MongoDB > DB Access</b>. and then secet <b>Edit</b> of a users then follow the screenshot. <br/><br/>
<img src="https://snipboard.io/h8c3tx.jpg" />

