const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema ({
  petName: {
    type: String,
    required: [true, "Name is required!"],
    minlength: [3, "Name must be 3 characters long!"],
  },

  petType: {
    type: String,
    required: [true, "Type is required!"],
    minlength: [3, "Type must be 3 characters long!"],
  },


  petDescription: {
    type: String,
    required: [true, "Description is required!"],
    minlength: [3, "Description must be 3 characters long!"]
  },

  skill1: {
    type: String
  },

  skill2: {
    type: String
  },

  skill3: {
    type: String
  },

}, {timestamps: true})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet;