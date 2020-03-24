/**
 * @author WMXPY
 * @namespace Color
 * @description Convert
 * @override Unit Test
 */

import { expect } from 'chai';
import { ColorConfig, createBlackColorConfig } from '../../src/config';
import { parseHex } from '../../src/parse';

describe('Given [Parse] helper functions', (): void => {

    it('should be able to convert other to rgb', (): void => {

        const hex: string = 'ccc';
        const config: ColorConfig = parseHex(hex);

        expect(config).to.be.deep.equal(createBlackColorConfig());
    });

    it('should be able to convert hex to rgb', (): void => {

        const hex: string = '#1256ab';
        const config: ColorConfig = parseHex(hex);

        expect(config).to.be.deep.equal({
            red: 18,
            green: 86,
            blue: 171,
        });
    });
});
