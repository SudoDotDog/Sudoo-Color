/**
 * @author WMXPY
 * @namespace Color
 * @description Convert
 */

import { ColorConfig, convertHexColor, fixAlpha } from "./config";

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

export const convertConfigToHEX = (config: ColorConfig, sharp: boolean): string => {

    const red: string = convertHexColor(config.red);
    const green: string = convertHexColor(config.green);
    const blue: string = convertHexColor(config.blue);

    if (sharp) {
        return `#${red}${green}${blue}`;
    }
    return `${red}${green}${blue}`;
};
