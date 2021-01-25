const PetController = require("../controllers/pet.controller");

module.exports = app => {
  app.get("/api/pet", PetController.findAllPet);
  app.get("/api/pet/:_id", PetController.findOnePet);
  app.post("/api/pet/new", PetController.createPet);
  app.put("/api/pet/update/:_id", PetController.updatePet);
  app.delete("/api/pet/delete/:_id", PetController.deletePet);
}