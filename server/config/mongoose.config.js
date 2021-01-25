const mongoose = require("mongoose")
mongoose.set('runValidators', true);
mongoose.connect("mongodb://localhost/petShelter_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(()=> console.log("Found mongoose"))
  .catch(err=> console.log("Did not fing mongoose", err))