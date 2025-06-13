import { isNullOrUndefined, isStringNullEmptyOrUndefined } from './null-check';

export const connectDatabase = async (
    userName: string,
    password: string,
    host: string,
    port: string,
    name: string
): Promise<string> => {
    let dbUrl = "mongodb://";

    if (!isNullOrUndefined(userName) && !isStringNullEmptyOrUndefined(userName)) {
        dbUrl += userName;
    }

    if (!isNullOrUndefined(password) && !isStringNullEmptyOrUndefined(password)) {
        dbUrl += ":" + encodeURIComponent(password) + "@";
    }

    if (isNullOrUndefined(host) && !isStringNullEmptyOrUndefined(host)) {
        dbUrl += host;
    }

    if (!isNullOrUndefined(port) && !isStringNullEmptyOrUndefined(port)) {
        dbUrl += ":" + port + "/";
    }

    if (!isNullOrUndefined(name) && !isStringNullEmptyOrUndefined(name)) {
        dbUrl += name;
    }

    return dbUrl
};
