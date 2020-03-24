/**
 * @author WMXPY
 * @namespace Color
 * @description Convert
 */

import { ColorConfig } from "./config";

export const createRGB = (config: ColorConfig, space: boolean): string => {

    if (space) {
        return `rgb(${config.red}, ${config.green}, ${config.blue})`;
    }
    return `rgb(${config.red},${config.green},${config.blue})`;
};

export const createRGBA = (config: ColorConfig, space: boolean): string => {

    if (space) {
        return `rgba(${config.red}, ${config.green}, ${config.blue}, ${config.alpha})`;
    }
    return `rgba(${config.red},${config.green},${config.blue},${config.alpha})`;
};
