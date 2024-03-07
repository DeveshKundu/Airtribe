const mongoose = require('mongoose');

const uri = "mongodb+srv://deveshk28:6DsgooiaNWy3Z5iC@clustur.xvadqep.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then( () => console.log("Connected to MongoDB!") )
  .catch( () => console.error.bind(console, "MongoDB connection error:") );

