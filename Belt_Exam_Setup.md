# Belt Exam Folder Setup

Create a new folder called "myNewProject" and **cd** into it.

```bash
mkdir myNewProject
cd myNewProject
```
Next, create a new project via:

```bash
npm init -y
```

This will create the package.json for our server. We will then need to install our dependencies:

```bash
npm install express
npm install mongoose
```

Next, via the terminal or the UI, create a new file called **server.js**.

```bash
touch server.js
```

Then, within the server.js add the following code:

```javascript
const express = require('express');
const app = express();
const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
```

Now, let's create our React project via **create-react-app**. Since React is used for the client side code, we can call our project "client". Make sure you are in the same folder level as your "server.js".

```bash
npx create-react-app client
```

Let's add a controller within the 'controllers' folder, called **person.controller.js**.

### *controllers/person.controller.js*

```javascript
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}
```

Next, in the routes folder, let's create the **person.routes.js** file.

### *routes/person.routes.js*

```javascript
const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
}
```

Now, we have a route that ends in 'api' and will simply return an object with a message equal to "Hello World". Let's link to this in our server.js:

