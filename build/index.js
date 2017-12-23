'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _error = require('./middleware/error');

var _error2 = _interopRequireDefault(_error);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var mongoose = require('mongoose');

mongoose.connect('mongodb://presidentApiAccess:presidentapi@35.225.7.90/presidentAPI');

//Middleware
(0, _middleware2.default)(app);
//API
app.use("/api", _api2.default);

//Error handling
app.use((0, _error2.default)());

exports.default = app;
//# sourceMappingURL=index.js.map