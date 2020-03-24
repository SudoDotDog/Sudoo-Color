/**
 * @author WMXPY
 * @namespace Color
 * @description index
 */

import { ColorConfig, createColorConfigFromRGB, createColorConfigFromRGBA, fixColorConfig } from "./config";
import { convertConfigToHEX, convertConfigToRGB, convertConfigToRGBA } from "./convert";
import { parseHex } from "./parse";

export class Color {

    public static black(): Color {

        return new Color({
            red: 0,
            green: 0,
            blue: 0,
        });
    }

    public static fromRGB(red: string | number, green: string | number, blue: string | number): Color {

        const config: ColorConfig = createColorConfigFromRGB(red, green, blue);
        return this.create(config);
    }

    public static fromRGBA(red: string | number, green: string | number, blue: string | number, alpha: string | number): Color {

        const config: ColorConfig = createColorConfigFromRGBA(red, green, blue, alpha);
        return this.create(config);
    }

    public static fromHEX(hex: string): Color {

        const config: ColorConfig = parseHex(hex);
        return this.create(fixColorConfig(config));
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

    public toRGB(space: boolean = false): string {

        return convertConfigToRGB(this.toConfig(), space);
    }

    public toRGBA(space: boolean = false): string {

        return convertConfigToRGBA(this.toConfig(), space);
    }

    public toHEX(sharp: boolean = false): string {

        return convertConfigToHEX(this.toConfig(), sharp);
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
