'use strict';

var _index = require('./config/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./index');

var _index4 = _interopRequireDefault(_index3);

var _logger = require('./utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index4.default.use("/", _express2.default.static('client'));

//Main route
_index4.default.get('/', function (req, res) {
    res.send("Hello from PresidentAPI");
});

//Port listening
_index4.default.listen(process.env.PORT || 1488, function () {
    _logger2.default.log('Listening on port ' + _index2.default.port);
});
//# sourceMappingURL=server.js.map