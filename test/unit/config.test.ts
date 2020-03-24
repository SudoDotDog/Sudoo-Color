/**
 * @author WMXPY
 * @namespace Color
 * @description Config
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { fixHexColor } from "../../src";

describe('Given [Config] Helper Methods', (): void => {

    const chance: Chance.Chance = new Chance('color-config');

    describe('Given [fixHexColor] Function', (): void => {

        it('should be able to fix normal number', (): void => {

            const source: number = chance.natural({ min: 0, max: 255 });
            const result: number = fixHexColor(source);

            expect(result).to.be.equal(source);
        });
    });
});
