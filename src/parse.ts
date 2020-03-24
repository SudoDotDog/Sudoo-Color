/**
 * @author WMXPY
 * @namespace Color
 * @description Parse
 */

import { ColorConfig, createBlackColorConfig, parseHexColor } from "./config";

export const parseHex = (hex: string): ColorConfig => {
    // tslint:disable: no-magic-numbers

    if (hex.length === 7 && hex[0] === '#') {
        return parseHex(hex.substring(1));
    }

    if (hex.length === 6) {
        const red: number = parseHexColor(hex.substring(0, 2));
        const green: number = parseHexColor(hex.substring(2, 4));
        const blue: number = parseHexColor(hex.substring(4, 6));

        return {
            red,
            green,
            blue,
        };
    }

    return createBlackColorConfig();
    // tslint:enable: no-magic-numbers
};
