"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return function (err, req, res, next) {
        console.log(err.message);
        res.status(500);
    };
};
//# sourceMappingURL=error.js.map