<div align='center'>

# Genius Car
</div>

### `MODULE LIST`
- 66-1 Module overview and project setup
- 66-2 Set basic Layout for Footer and header
- 66-3 Style Header and footer and create simple banner
- 66-4 Style Banner Component, work with text and buttons
- 66-5 Dynamic Data for banner with gradient overlay
- 66-6 Fix border radius and relative position image for About section
- 66-7 Load Services fake data and display service Card
- 66-8 (Recap) Create a simple Login page with firebase integration

### `PACKAGES`
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
    

### `Setup Tailwind CSS`
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


