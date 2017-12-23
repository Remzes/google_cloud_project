"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (mongoose, presidentModel) {
    var CountrySchema = new mongoose.Schema({
        _id: mongoose.Schema.ObjectId,
        name: String,
        flag: String,
        foundationDate: String,
        abbreviation: String,
        presidents: [presidentModel]
    });

    return mongoose.model("Country", CountrySchema, "countries");
};
//# sourceMappingURL=country.js.map