/**
 * @author WMXPY
 * @namespace Color
 * @description Color
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Color } from "../../src";

describe('Given {Color} Class', (): void => {

    const chance: Chance.Chance = new Chance('color-color');

    it('should be able to construct', (): void => {

        const instance: Color = Color.create();
        expect(instance).to.be.instanceOf(Color);
    });
});
