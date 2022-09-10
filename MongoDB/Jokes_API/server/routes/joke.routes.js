const JokeController = require("./../controllers/joke.controller")

module.exports = (app) =>{
    app.get("/api/test", JokeController.testApi)
    app.get("/api/jokes", JokeController.allJoke)
    app.post("/api/jokes/new", JokeController.addJoke)
    app.get("/api/jokes/:id", JokeController.oneJoke)
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)

}