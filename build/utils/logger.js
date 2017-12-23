'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('colors');

var config = require("../config");

var noop = function noop() {};
var consoleLog = config.default.logging ? console.log.bind(console) : noop;

var logger = {
    log: function log() {
        var args = _lodash2.default.toArray(arguments).map(function (arg) {
            if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
                var string = JSON.stringify(arg, 2);
                return string.yellow;
            } else {
                arg += '';
                return arg.yellow;
            }
        });
        consoleLog.apply(console, args);
    }
};

exports.default = logger;
//# sourceMappingURL=logger.js.map