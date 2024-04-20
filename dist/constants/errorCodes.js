"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = exports.ErrorCodes = void 0;
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    ErrorCodes[ErrorCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ErrorCodes[ErrorCodes["NOT_AUTH"] = 401] = "NOT_AUTH";
})(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["ALREADY_EXISTS"] = "already exists";
    ErrorMessages["INVALID_DATA"] = "invalid data";
    ErrorMessages["NOT_FOUND"] = "not found";
})(ErrorMessages || (exports.ErrorMessages = ErrorMessages = {}));
//# sourceMappingURL=errorCodes.js.map