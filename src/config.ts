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

export const fixHexColor = (color: number): number => {

    const fixed: number = Math.max(MIN_HEX_COLOR, Math.min(MAX_HEX_COLOR, color));
    return Math.floor(fixed);
};

export const fixAlpha = (alpha: number): number => {

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
