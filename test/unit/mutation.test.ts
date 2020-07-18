/* eslint-disable @typescript-eslint/no-magic-numbers */
/**
 * @author WMXPY
 * @namespace Color
 * @description Mutation
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { ColorConfig, highlightMutate, overallMutate } from "../../src";

describe('Given [Mutation] helper functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('color-mutation');

    describe('Given [OverallMutate] function', (): void => {

        it('should be able to overall mutate', (): void => {

            const config: ColorConfig = {
                red: 100,
                green: 100,
                blue: 100,
            };

            const result: ColorConfig = overallMutate(config, 0.5);
            expect(result).to.be.deep.equal({
                red: 150,
                green: 150,
                blue: 150,
            });
        });

        it('should be able to overall mutate - reverse', (): void => {

            const config: ColorConfig = {
                red: 100,
                green: 100,
                blue: 100,
            };

            const result: ColorConfig = overallMutate(config, -0.5);
            expect(result).to.be.deep.equal({
                red: 50,
                green: 50,
                blue: 50,
            });
        });

        it('should be able to overall mutate - invalid', (): void => {

            const config: ColorConfig = {
                red: 100,
                green: 100,
                blue: 100,
            };

            const result: ColorConfig = overallMutate(config, 2);
            expect(result).to.be.deep.equal(config);
        });
    });

    describe('Given [HighlightMutate] function', (): void => {

        it('should be able to highlight mutate', (): void => {

            const config: ColorConfig = {
                red: 100,
                green: 100,
                blue: 100,
            };

            const result: ColorConfig = highlightMutate(config, 'red', 0.5, 0.1);
            expect(result).to.be.deep.equal({
                red: 150,
                green: 95,
                blue: 95,
            });
        });

        it('should be able to highlight mutate - invalid', (): void => {

            const config: ColorConfig = {
                red: 100,
                green: 100,
                blue: 100,
            };

            const result: ColorConfig = highlightMutate(config, 'red', 0.5, -0.1);
            expect(result).to.be.deep.equal(config);
        });
    });
});
