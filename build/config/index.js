"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    dev: "developmnet",
    test: "testing",
    prod: "production",
    port: process.env.PORT || 1488
};

process.env.NODE_ENV = process.env.NODE_ENV || config.env;
config.env = process.env.NODE_ENV;

var envConfig = void 0;
try {
    envConfig = require("./" + config.env);
    envConfig = envConfig || {};
} catch (e) {
    console.log(e);
    envConfig = {};
}

exports.default = _lodash2.default.merge(config, envConfig);
//# sourceMappingURL=index.js.map