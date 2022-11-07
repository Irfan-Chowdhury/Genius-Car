<div align='center'>

# Genius Car
</div>

<p align='left'><i>[Client Section]</i></p>



## `MODULE LIST`
- 66-1 Module overview and project setup
- 66-2 Set basic Layout for Footer and header
- 66-3 Style Header and footer and create simple banner
- 66-4 Style Banner Component, work with text and buttons
- 66-5 Dynamic Data for banner with gradient overlay
- 66-6 Fix border radius and relative position image for About section
- 66-7 Load Services fake data and display service Card
- 66-8 (Recap) Create a simple Login page with firebase integration
- 66-9 (Recap) Sign Up page setup
- 66-10 (Recap) Auth Context setup and create a user and Module Summary and Home work
- 67-1 Recap set login and set basic server
- 67-2 Use Dot Env To Hide Credentials And Insert Data In Database
- 67-3 Load services data and create checkout page
- 67-4 Implement Checkout Form to create order object
- 67-5 Save order on the order collection using Post Method
- 67-6 Use Query parameter to load user specific data
- 67-7 Display orders and Service image in a tabular format
- 67-8 Create Private route and move delete handler
- 67-9 Module summary and update operation
- 69-2 (Recap) Auth redirect after successful login

## `Tips`
- Follow the [Link](https://github.com/remix-run/react-router/blob/dev/examples/auth/src/App.tsx) to understand auth


## `PACKAGES`
- Create [React](https://reactjs.org/) App
    ```bash
    npx create-react-app your-project-name
    ```

- [React Router](https://reactrouter.com/en/main)
    ```bash
    npm install react-router-dom
    ```
- [DaisyUI](https://daisyui.com/)
    ```bash
    npm i daisyui
    ```
    and then go and open <i>tailwind.config.js</i> and replace the code.
    ```bash
    plugins:
     [require("daisyui")],
    ```
- [React-Bootstrap](https://react-bootstrap.github.io/)
    ```bash
    npm install react-bootstrap bootstrap
    ```
    and then goto src/index.js and paste the bellow code.
    ```bash
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.min.js';
    ```
- [Firebase](https://console.firebase.google.com/)
    ```bash
    npm install firebase
    ```

    

## `Setup Tailwind CSS`
Visit [Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)

- Install Tailwind CSS
    ```bash
    npm install -D tailwindcss postcss autoprefixer

    npx tailwindcss init -p
    ```

- Configure your template paths.
  Please check and open <i>tailwind.config.js</i> file and replace the code.
    ```bash
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
        ],
    ```

- Add the Tailwind directives to your CSS <br>
<small>goto ./src/index.css file and open. Then paste the code at the top</small>
 ```bash
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

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
