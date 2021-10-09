const { CONSTANTS } = require('./constants.js');

const { SPECIAL_PROP_VALUE } = CONSTANTS;

module.exports.NotImplementedError = class extends Error {
    constructor(message) {
        super(message);
        this._specialProp = SPECIAL_PROP_VALUE;
    }
};