"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (mongoose) {
    var PresidentSchema = new mongoose.Schema({
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
        photos: [{ photo: String }, { photo: String }, { photo: String }]
    });

    return mongoose.model("President", PresidentSchema).schema;
};
//# sourceMappingURL=president.js.map