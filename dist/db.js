"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const null_check_1 = require("./null-check");
const connectDatabase = (userName, password, host, port, name) => __awaiter(void 0, void 0, void 0, function* () {
    let dbUrl = "mongodb://";
    if (!(0, null_check_1.isNullOrUndefined)(userName) && !(0, null_check_1.isStringNullEmptyOrUndefined)(userName)) {
        dbUrl += userName;
    }
    if (!(0, null_check_1.isNullOrUndefined)(password) && !(0, null_check_1.isStringNullEmptyOrUndefined)(password)) {
        dbUrl += ":" + encodeURIComponent(password) + "@";
    }
    if ((0, null_check_1.isNullOrUndefined)(host) && !(0, null_check_1.isStringNullEmptyOrUndefined)(host)) {
        dbUrl += host;
    }
    if (!(0, null_check_1.isNullOrUndefined)(port) && !(0, null_check_1.isStringNullEmptyOrUndefined)(port)) {
        dbUrl += ":" + port + "/";
    }
    if (!(0, null_check_1.isNullOrUndefined)(name) && !(0, null_check_1.isStringNullEmptyOrUndefined)(name)) {
        dbUrl += name;
    }
    return dbUrl;
});
exports.connectDatabase = connectDatabase;
