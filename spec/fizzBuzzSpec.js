import { fizzBuzz } from "../src/fizzBuzz";

describe('fizzBuzz', () => {

    it('return expected array', () => {
        expect(fizzBuzz(9, 16)).toEqual(['Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    });
});