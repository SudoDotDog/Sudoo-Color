/**
 * @author WMXPY
 * @namespace Color
 * @description Convert
 * @override Unit Test
 */

import { expect } from 'chai';
import { ColorConfig, convertConfigToRGB, convertConfigToRGBA } from '../../src';

describe('Given [Convert] helper functions', (): void => {

    it('should be able to convert config to rgb', (): void => {

        const config: ColorConfig = {

            red: 18,
            green: 86,
            blue: 171,
        };
        const rgb: string = convertConfigToRGB(config, false);

        expect(rgb).to.be.equal('rgb(18,86,171)');
    });

    it('should be able to convert config to rgba', (): void => {

        const config: ColorConfig = {

            red: 18,
            green: 86,
            blue: 171,
            alpha: 0.5,
        };
        const rgb: string = convertConfigToRGBA(config, false);

        expect(rgb).to.be.equal('rgba(18,86,171,0.5)');
    });
});
