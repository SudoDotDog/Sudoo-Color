/**
 * @author WMXPY
 * @namespace Color
 * @description Mutation
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { ColorConfig, overallMutate } from "../../src";

describe('Given [Mutation] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('color-mutation');

    describe('Given [OverallMutate] function', (): void => {

        it('should be able to overall mutate', (): void => {

            const config: ColorConfig = {
                red: 100,
                green: 100,
                blue: 100,
            };

            // tslint:disable-next-line: no-magic-numbers
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

            // tslint:disable-next-line: no-magic-numbers
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
});
