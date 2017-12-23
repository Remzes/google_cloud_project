"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _db = require("../../db/db");

var presidentRouter = (0, _express.Router)();

//Inside root/countries/:country/:president
//Parameters handler
presidentRouter.param("president", function (req, res, next, president) {

    var presidentFullName = president.split("-");
    if (presidentFullName.length === 2) {
        _db.CountryModel.find({ abbreviation: req.baseUrl.split('/')[3] }, {
            presidents: {
                $elemMatch: {
                    firstName: presidentFullName[0].toString(),
                    lastName: presidentFullName[1].toString()
                }
            }
        }, function (err, data) {
            var presidentObject = data[0].presidents[0];
            res.locals.president = data[0].presidents.length !== 0 ? presidentObject : "No President Found!";
            next();
        });
    } else {
        res.send("No President Found!");
    }
});

//Route handler
presidentRouter.get("/:president", function (req, res) {
    res.json(res.locals.president);
});

exports.default = presidentRouter;
//# sourceMappingURL=presidentRouters.js.map