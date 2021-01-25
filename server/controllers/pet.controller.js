const Pet = require("../models/pet.model");

//get all
module.exports.findAllPet = (req, res) => {
  Pet.find()
  .then(allPet => res.json({allPet: allPet}))
  .catch(err => res.json({message: "Wrong while grabing all pets!", error: err}))
}
//get one
module.exports.findOnePet = (req, res) => {
  Pet.findOne({_id: req.params._id})
    .then(onePet => res.json({onePet: onePet}))
    .catch(err => res.json ({message:"Wrong while grabing one pet.", error: err}))
}
//create
module.exports.createPet = (req, res) => {
  Pet.create(req.body)
    .then(onePet => res.json({onePet: onePet}))
    .catch(err => res.json ({message:"Wrong while creating one pet.", error: err}))
}
//update
module.exports.updatePet = (req, res) => {
  Pet.updateOne({_id: req.params._id}, {
    $set: {
      petName: req.body.petName,
      petType: req.body.petType,
      patDescription: req.body.patDescription,
      skill1: req.body.skill1,
      skill2: req.body.skill2,
      skill3: req.body.skill3
    }
  })
    .then(onePet => res.json({onePet: onePet}))
    .catch(err => res.json({message: "Wrong with updating pet.", error: err}))
}
//delete
module.exports.deletePet = (req, res) => {
  Pet.remove({_id: req.params._id})
    .then(res.json({message:"Pet successfully removed!"}))
    .catch(err => res.json({message:"Wrong while deleting one pet", error: err}))
}