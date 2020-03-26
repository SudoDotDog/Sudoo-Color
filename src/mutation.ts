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
    const reverseAdder: number = reverse * value;

    return {
        ...config,
        red: fixHexColor(config.red - (config.red * reverseAdder)),
        green: fixHexColor(config.green - (config.green * reverseAdder)),
        blue: fixHexColor(config.blue - (config.blue * reverseAdder)),
        [key]: fixHexColor(config[key] * multiplier),
    };
};
