<div align='center'>

# Genius Car
</div>

<p align='left'><i>[Server Section]</i></p>

## `MODULE LIST`
- 67-1 Recap set login and set basic server
- 67-2 Use Dot Env To Hide Credentials And Insert Data In Database
- 67-3 Load services data and create checkout page
- 67-5 Save order on the order collection using Post Method
- 67-6 Use Query parameter to load user specific data
- 67-8 Create Private route and move delete handler
- 67-9 Module summary and update operation
- 69-4 How does JWT token works and create access token secret

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

## `JWT Setup`
- install JWT token. visit https://github.com/auth0/node-jsonwebtoken
    ```bash
    npm install jsonwebtoken
    ```
- setup the code in index.js
    ```bash
    var jwt = require('jsonwebtoken');
    ```
- Then create random code, Firstly open terminal and type 
    ```bash
    node
    ```
    then type 
    ```bash
    require('crypto').randomBytes(64).toString('hex')
    ```
    then a string value will be shown, copy the text and setup in .env and copy the code below and paste under jwt in index.js <br>
    ```bash
    var token = jwt.sign({ foo: 'bar' }, process.env.ACCESS_TOKEN_SECRET);
    ```

