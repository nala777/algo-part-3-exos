import { oddOrEven } from "../src/oddOrEven";

describe('oddOrEven', () => {
    it('return expected value', () => {
        expect(oddOrEven(2)).toEqual('Even');
        expect(oddOrEven(17)).toEqual('Odd');
    });
});