"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectEmpty = exports.isStringNullEmptyOrUndefined = exports.isNumberNullOrUndefined = exports.isNullOrEmptyArray = exports.isNullOrUndefined = void 0;
const isNullOrUndefined = (s) => {
    return s === null || s === undefined;
};
exports.isNullOrUndefined = isNullOrUndefined;
const isNullOrEmptyArray = (s) => {
    return (0, exports.isNullOrUndefined)(s) || s.length === 0;
};
exports.isNullOrEmptyArray = isNullOrEmptyArray;
const isNumberNullOrUndefined = (o) => {
    return (0, exports.isNullOrUndefined)(o) || o.toString() === '';
};
exports.isNumberNullOrUndefined = isNumberNullOrUndefined;
const isStringNullEmptyOrUndefined = (str) => {
    return (0, exports.isNullOrUndefined)(str) || str === '';
};
exports.isStringNullEmptyOrUndefined = isStringNullEmptyOrUndefined;
const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};
exports.isObjectEmpty = isObjectEmpty;
