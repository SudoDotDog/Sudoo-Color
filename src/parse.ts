/**
 * @author WMXPY
 * @namespace Color
 * @description Parse
 */

import { ColorConfig, createBlackColorConfig, parseHexColor } from "./config";

export const removeHexSharp = (hex: string): string => {

    if (hex.length === 7 && hex[0] === '#') {
        return hex.substring(1);
    }
    return hex;
};

export const validateHex = (hex: string): boolean => {

    return (/[0-9A-Fa-f]{6}/).test(hex);
};

export const parseHex = (hex: string): ColorConfig => {

    const sharpRemoved: string = removeHexSharp(hex);

    if (!validateHex(sharpRemoved)) {
        return createBlackColorConfig();
    }

    // tslint:disable: no-magic-numbers
    const red: number = parseHexColor(sharpRemoved.substring(0, 2));
    const green: number = parseHexColor(sharpRemoved.substring(2, 4));
    const blue: number = parseHexColor(sharpRemoved.substring(4, 6));
    // tslint:enable: no-magic-numbers

    return {
        red,
        green,
        blue,
    };
};
