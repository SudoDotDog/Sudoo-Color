/**
 * @author WMXPY
 * @namespace Color
 * @description Mutation
 */

import { ColorConfig, fixHexColor, PureColorConfig } from "./config";

export const overallMutate = (config: ColorConfig, value: number): ColorConfig => {

    if (value < -1) {
        return config;
    }
    if (value > 1) {
        return config;
    }

    const multiplier: number = 1 + value;

    return {
        ...config,
        red: fixHexColor(config.red * multiplier),
        green: fixHexColor(config.green * multiplier),
        blue: fixHexColor(config.blue * multiplier),
    };
};

export const highlightMutate = (
    config: ColorConfig,
    key: keyof PureColorConfig,
    value: number,
    reverse: number,
): ColorConfig => {

    if (value < -1) {
        return config;
    }
    if (value > 1) {
        return config;
    }

    if (reverse < 0) {
        return config;
    }
    if (reverse > 1) {
        return config;
    }

    const multiplier: number = 1 + value;
    const reverseMultiplier: number = (1 + (reverse * value)) * -1;

    return {
        ...config,
        red: fixHexColor(config.red * reverseMultiplier),
        green: fixHexColor(config.green * reverseMultiplier),
        blue: fixHexColor(config.blue * reverseMultiplier),
        [key]: fixHexColor(config[key] * multiplier),
    };
};
