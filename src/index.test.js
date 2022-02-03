import {getMonth} from "./index.js";

describe('test for getMonth function', ()=> {
    const nmrMonth = 7;
    const less = 0;
    const more = 13;
    const string = 'month';

    it('correct output input data', ()=> {
        expect(getMonth(nmrMonth)).toBe('июль');
        expect(getMonth(less)).toBe('неизвестно');
        expect(getMonth(more)).toBe('неизвестно');
        expect(getMonth(string)).toBe('неизвестно');
    })
})