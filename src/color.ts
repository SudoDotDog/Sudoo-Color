/**
 * @author WMXPY
 * @namespace Color
 * @description index
 */

import { ColorConfig, createBlackColorConfig, createColorConfigFromRGB, createColorConfigFromRGBA, createWhiteColorConfig, fixAlpha, fixColorConfig, fixHexColor } from "./config";
import { convertConfigToHEX, convertConfigToRGB, convertConfigToRGBA } from "./convert";
import { parseHex } from "./parse";

export class Color {

    public static black(): Color {

        return this.create(createBlackColorConfig());
    }

    public static white(): Color {

        return this.create(createWhiteColorConfig());
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

    public get red(): number {
        return this._red;
    }
    public get green(): number {
        return this._green;
    }
    public get blue(): number {
        return this._blue;
    }
    public get alpha(): number {
        if (typeof this._alpha === 'number') {
            return this._alpha;
        }
        return 0;
    }

    public setRed(red: number): this {
        this._red = fixHexColor(red);
        return this;
    }
    public setGreen(green: number): this {
        this._green = fixHexColor(green);
        return this;
    }
    public setBlue(blue: number): this {
        this._blue = fixHexColor(blue);
        return this;
    }
    public setAlpha(alpha: number): this {
        this._alpha = fixAlpha(alpha);
        return this;
    }

    public dyeRed(red: number): this {
        const newRed: number = this._red + red;
        return this.setRed(newRed);
    }
    public dyeGreen(green: number): this {
        const newGreen: number = this._green + green;
        return this.setGreen(newGreen);
    }
    public dyeBlue(blue: number): this {
        const newBlue: number = this._blue + blue;
        return this.setBlue(newBlue);
    }

    public highlightRed(red: number): this {
        return this;
    }
    public highlightGreen(green: number): this {
        return this;
    }
    public highlightBlue(blue: number): this {
        return this;
    }

    public dilution(value: number): this {

        return this;
    }
    public condense(value: number): this {

        return this;
    }

    public hasAlpha(): boolean {

        return typeof this._alpha === 'number';
    }

    public clone(): Color {

        return new Color(this.toConfig());
    }

    public equals(target: Color): boolean {

        return this.hash() === target.hash();
    }

    public hash(): string {

        return JSON.stringify(this.toConfig());
    }

    public toRGBOrRGBA(space: boolean = false): string {

        if (typeof this._alpha === 'number') {
            return this.toRGBA(space);
        }
        return this.toRGB(space);
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

    public toString(): string {

        const list: number[] = [this._red, this._green, this._blue];
        if (typeof this._alpha === 'number') {
            list.push(this._alpha);
        }
        return list.join(',');
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
