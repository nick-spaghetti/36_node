const {
    square,
    cube
} = require('./square');

describe('square function', () => {
    test('square should square a positive number', () => {
        const res = square(3);
        expect(res).toEqual(9);
    })
    test('square should square negative numbers', () => {
        const res = square(-9);
        expect(res).toEqual(81);
    })
})

describe('cube function', () => {
    test('square should cube a positive number', () => {
        const res = cube(3);
        expect(res).toEqual(27);
        const res2 = cube(2);
        expect(res2).toEqual(8);
    })
})