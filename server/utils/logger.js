require('colors');
import _ from 'lodash';
const config = require("../config");

let noop = function(){};
let consoleLog = config.default.logging ? console.log.bind(console) : noop;

let logger = {
    log: function(){
        let args = _.toArray(arguments)
            .map((arg) => {
                if (typeof arg === 'object'){
                    let string = JSON.stringify(arg, 2);
                    return string.yellow;
                } else {
                    arg+='';
                    return arg.yellow;
                }
            });
        consoleLog.apply(console, args);
    }
};

export default logger;