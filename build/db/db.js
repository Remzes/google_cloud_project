"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountryModel = exports.PresidentModel = undefined;

var _country = require("./Models/country");

var _country2 = _interopRequireDefault(_country);

var _president = require("./Models/president");

var _president2 = _interopRequireDefault(_president);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoose = require('mongoose');
var PresidentModel = exports.PresidentModel = (0, _president2.default)(mongoose);
var CountryModel = exports.CountryModel = (0, _country2.default)(mongoose, PresidentModel);
//# sourceMappingURL=db.js.map