import _ from 'lodash';

const config = {
    dev: "developmnet",
    test: "testing",
    prod: "production",
    port: process.env.PORT || 1488
};

process.env.NODE_ENV = process.env.NODE_ENV || config.env;
config.env = process.env.NODE_ENV;

let envConfig;
try {
    envConfig = require("./" + config.env);
    envConfig = envConfig || {}
} catch (e) {
    console.log(e);
    envConfig = {};
}

export default _.merge(config, envConfig);