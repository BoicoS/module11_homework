import {getPercents} from "./index.js";

describe('test for getPercents function', ()=> {
    const percent = 20;
    const number = 100;
    const floatPerc= 20.5;
    const floatNum = 100.5;
    const numStr = "a";
    

    it('correct output input data', ()=> 
        expect(getPercents(percent, number)).toBe(20));
        expect(getPercents(floatPerc, floatNum)).toBe(20.6025);        
        expect(getPercents(percent, numStr)).toBe("Input values are not numbers");       
    
});