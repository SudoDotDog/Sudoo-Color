/**
 * @author WMXPY
 * @namespace Color
 * @description Mutation
 */

import { ColorConfig, fixHexColor } from "./config";

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
