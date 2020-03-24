/**
 * @author WMXPY
 * @namespace Color
 * @description Convert
 */

import { ColorConfig, fixAlpha } from "./config";

export const convertConfigToRGB = (config: ColorConfig, space: boolean): string => {

    if (space) {
        return `rgb(${config.red}, ${config.green}, ${config.blue})`;
    }
    return `rgb(${config.red},${config.green},${config.blue})`;
};

export const convertConfigToRGBA = (config: ColorConfig, space: boolean): string => {

    const alpha: number = fixAlpha(config.alpha);
    if (space) {
        return `rgba(${config.red}, ${config.green}, ${config.blue}, ${alpha})`;
    }
    return `rgba(${config.red},${config.green},${config.blue},${alpha})`;
};
