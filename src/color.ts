/**
 * @author WMXPY
 * @namespace Color
 * @description index
 */

import { ColorConfig } from "./config";

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

    private _red: number;
    private _green: number;
    private _blue: number;
    private _alpha?: number;

    private constructor(config: ColorConfig) {

        this._red = config.red;
        this._green = config.green;
        this._blue = config.blue;
        this._alpha = config.alpha;
    }

    public toConfig(): ColorConfig {

        return {
            red: this._red,
            green: this._green,
            blue: this._blue,
            alpha: this._alpha,
        };
    }
}
