'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _db = require('../../db/db');

var countryRoutes = (0, _express.Router)();

//Inside root/countries route
countryRoutes.get('/', function (req, res) {
    _db.CountryModel.find({}, function (err, data) {
        res.json(data);
    });
});

//Inside root/countries/:country
//Parameter handler
countryRoutes.param("country", function (req, res, next, country) {
    _db.CountryModel.find({ abbreviation: country }, function (err, data) {
        var countryObject = data[0];
        res.locals.country = data.length !== 0 ? countryObject : "No Country Found!";
        next();
    });
});

//Route handler
countryRoutes.get('/:country', function (req, res) {
    res.send(res.locals.country);
});
//End of root/countries/:country

exports.default = countryRoutes;
//# sourceMappingURL=countryRouters.js.map