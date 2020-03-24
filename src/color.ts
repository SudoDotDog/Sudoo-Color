/**
 * @author WMXPY
 * @namespace Color
 * @description index
 */

import { ColorConfig } from "./declare";

export class Color {

    public static black(): Color {

        return new Color({
            red: 0,
            green: 0,
            blue: 0,
        });
    }

    public static create(config: ColorConfig) {

        return new Color(config);
    }

    private constructor(config: ColorConfig) {

    }
}
