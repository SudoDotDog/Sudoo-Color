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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('color-color');

    it('should be able to construct', (): void => {

        const instance: Color = Color.black();
        expect(instance).to.be.instanceOf(Color);
    });
});
