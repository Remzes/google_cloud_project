'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _countryRouters = require('./country/countryRouters');

var _countryRouters2 = _interopRequireDefault(_countryRouters);

var _presidentRouters = require('./president/presidentRouters');

var _presidentRouters2 = _interopRequireDefault(_presidentRouters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();


//Routes
router.use("/countries", _countryRouters2.default);
router.use("/countries/:country", _presidentRouters2.default);

exports.default = router;
//# sourceMappingURL=index.js.map