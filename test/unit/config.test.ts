/**
 * @author WMXPY
 * @namespace Color
 * @description Config
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { fixAlpha, fixHexColor } from "../../src";

describe('Given [Config] Helper Methods', (): void => {

    const chance: Chance.Chance = new Chance('color-config');

    describe('Given [fixHexColor] Function', (): void => {

        it('should be able to fix normal number', (): void => {

            const source: number = chance.natural({ min: 0, max: 255 });
            const result: number = fixHexColor(source);

            expect(result).to.be.equal(source);
        });

        it('should be able to fix multiple precision number', (): void => {

            const source: number = chance.natural({ min: 0, max: 255 });
            // tslint:disable-next-line: no-magic-numbers
            const result: number = fixHexColor(source + 0.5);

            expect(result).to.be.equal(source);
        });

        it('should be able to fix overflow number', (): void => {

            const source: number = chance.natural({ min: 0, max: 255 });
            // tslint:disable-next-line: no-magic-numbers
            const resultOver: number = fixHexColor(source + 255);
            const resultDown: number = fixHexColor(-source);

            // tslint:disable-next-line: no-magic-numbers
            expect(resultOver).to.be.equal(255);
            expect(resultDown).to.be.equal(0);
        });
    });

    describe('Given [fixAlpha] Function', (): void => {

        it('should be able to fix normal alpha', (): void => {

            const source: number = chance.floating({ min: 0, max: 1 });
            const result: number = fixAlpha(source);

            expect(result).to.be.equal(parseFloat(result.toFixed(2)));
        });

        it('should be able to fix overflow alpha', (): void => {

            const source: number = parseFloat(chance.floating({ min: 0, max: 1 }).toFixed(2));
            const resultOver: number = fixHexColor(source + 1);
            const resultDown: number = fixHexColor(-source);

            expect(resultOver).to.be.equal(1);
            expect(resultDown).to.be.equal(0);
        });
    });
});