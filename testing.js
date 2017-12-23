const mongoose = require("mongoose");
const tunnel = require('tunnel-ssh');

const PresidentSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    dOB: String,
    prose: String,
    precededBy: String,
    succeededBy: String,
    website: String,
    wikipediaArticle: String,
    whiteHouseMapCoordinates: {
        x: Number,
        y: Number
    },
    photos: [
        {photo: String},
        {photo: String},
        {photo: String}
    ]
});

const presidentModel = mongoose.model("President", PresidentSchema).schema;


const CountrySchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    name: String,
    flag: String,
    foundationDate: String,
    abbreviation: String,
    presidents: [presidentModel]
});

const countryModel = mongoose.model("Country", CountrySchema, "countries");

countryModel.find({}, (err, data) => {
    console.log(data);
});