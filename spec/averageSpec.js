import { average } from "../src/average";

describe('average', () => {
    it('return the average of array', () => {
        let scores = [8, 12, 14, 6, 11, 9];

        expect(average(scores)).toEqual(10);
    });
});