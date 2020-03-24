/**
 * @author WMXPY
 * @namespace Color
 * @description Config
 */

const MIN_HEX_COLOR: number = 0;
const MAX_HEX_COLOR: number = 255;

const MIN_ALPHA: number = 0;
const MAX_ALPHA: number = 1;

export type ColorConfig = {

    readonly red: number;
    readonly green: number;
    readonly blue: number;
    readonly alpha?: number;
};

export const createBlackColorConfig = (): ColorConfig => ({
    red: 0,
    green: 0,
    blue: 0,
});

export const createWhiteColorConfig = (): ColorConfig => ({

    red: 255,
    green: 255,
    blue: 255,
});

export const parseHexColor = (hex: string): number => {

    if (!(/[0-9A-Fa-f]{2}/).test(hex)) {
        return MAX_HEX_COLOR;
    }

    const parsed: number = parseInt(hex.substring(0, 2), 16);
    return fixHexColor(parsed);
};

export const convertHexColor = (color: number): string => {

    const fixed: number = fixHexColor(color);
    const parsed: string = fixed.toString(16);
    return parsed;
};

export const fixColorInput = (color: number | string): number => {

    const colorNumber: number = Number(color);
    if (isNaN(colorNumber)) {
        return 0;
    }
    return fixHexColor(colorNumber);
};

export const fixAlphaInput = (alpha: number | string): number => {

    const colorNumber: number = Number(alpha);
    if (isNaN(colorNumber)) {
        return 0;
    }
    return fixAlpha(colorNumber);
};

export const fixHexColor = (color: number): number => {

    const fixed: number = Math.max(MIN_HEX_COLOR, Math.min(MAX_HEX_COLOR, color));
    return Math.floor(fixed);
};

export const fixAlpha = (alpha?: number): number => {

    if (typeof alpha !== 'number') {
        return 0;
    }

    const fixed: number = Math.max(MIN_ALPHA, Math.min(MAX_ALPHA, alpha));
    const fixedString = fixed.toFixed(2);
    return parseFloat(fixedString);
};

export const fixColorConfig = (config: ColorConfig): ColorConfig => {

    const result: ColorConfig = {

        red: fixHexColor(config.red),
        green: fixHexColor(config.green),
        blue: fixHexColor(config.blue),
    };

    if (typeof config.alpha === 'number') {
        return {
            ...result,
            alpha: fixAlpha(config.alpha),
        };
    }
    return result;
};

export const createColorConfigFromRGB = (red: string | number, green: string | number, blue: string | number): ColorConfig => {

    return {
        red: fixColorInput(red),
        green: fixColorInput(green),
        blue: fixColorInput(blue),
    };
};

export const createColorConfigFromRGBA = (red: string | number, green: string | number, blue: string | number, alpha: string | number): ColorConfig => {

    return {
        red: fixColorInput(red),
        green: fixColorInput(green),
        blue: fixColorInput(blue),
        alpha: fixAlphaInput(alpha),
    };
};
