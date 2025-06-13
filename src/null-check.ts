export const isNullOrUndefined = (s: any): boolean => {
    return s === null || s === undefined;
};

export const isNullOrEmptyArray = (s: any[]): boolean => {
    return isNullOrUndefined(s) || s.length === 0;
};

export const isNumberNullOrUndefined = (o: number): boolean => {
    return isNullOrUndefined(o) || o.toString() === '';
};

export const isStringNullEmptyOrUndefined = (str: string): boolean => {
    return isNullOrUndefined(str) || str === '';
};
