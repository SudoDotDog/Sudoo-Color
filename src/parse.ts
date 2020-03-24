/**
 * @author WMXPY
 * @namespace Color
 * @description Parse
 */

import { ColorConfig, createBlackColorConfig } from "./config";

export const parseHex = (hex: string): ColorConfig => {
    // tslint:disable: no-magic-numbers

    if (hex.length === 7 && hex[0] === '#') {
        return parseHex(hex.substring(1));
    }

    if (hex.length === 6) {
        const red: number = parseInt(hex.substring(0, 2), 16);
        const green: number = parseInt(hex.substring(2, 4), 16);
        const blue: number = parseInt(hex.substring(4, 6), 16);

        return {
            red,
            green,
            blue,
        };
    }

    return createBlackColorConfig();
    // tslint:enable: no-magic-numbers
};
