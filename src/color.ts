/**
 * @author WMXPY
 * @namespace Color
 * @description index
 */

import { ColorConfig, createBlackColorConfig, createColorConfigFromRGB, createColorConfigFromRGBA, createWhiteColorConfig, fixAlpha, fixColorConfig, fixHexColor } from "./config";
import { convertConfigToHEX, convertConfigToRGB, convertConfigToRGBA } from "./convert";
import { highlightMutate, overallMutate } from "./mutation";
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
        return this.create(config);
    }

    public static create(config: ColorConfig) {

        const fixed: ColorConfig = fixColorConfig(config);
        return new Color(fixed);
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

    public highlightRed(red: number, reverse: number = 0.2): this {
        const parsed: ColorConfig = highlightMutate(this.toConfig(), 'red', red, reverse);
        return this.update(parsed);
    }
    public highlightGreen(green: number, reverse: number = 0.2): this {
        const parsed: ColorConfig = highlightMutate(this.toConfig(), 'green', green, reverse);
        return this.update(parsed);
    }
    public highlightBlue(blue: number, reverse: number = 0.2): this {
        const parsed: ColorConfig = highlightMutate(this.toConfig(), 'blue', blue, reverse);
        return this.update(parsed);
    }

    public dilution(value: number): this {
        const parsed: ColorConfig = overallMutate(this.toConfig(), -value);
        return this.update(parsed);
    }
    public condense(value: number): this {
        const parsed: ColorConfig = overallMutate(this.toConfig(), value);
        return this.update(parsed);
    }

    public hasAlpha(): boolean {

        return typeof this._alpha === 'number';
    }

    public update(config: ColorConfig): this {

        const fixed: ColorConfig = fixColorConfig(config);
        this._red = fixed.red;
        this._green = fixed.green;
        this._blue = fixed.blue;
        this._alpha = fixed.alpha;
        return this;
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

    public clone(): Color {
        return new Color(this.toConfig());
    }
    public equals(target: Color): boolean {
        return this.hash() === target.hash();
    }
    public hash(): string {
        return JSON.stringify(this.toConfig());
    }
}
