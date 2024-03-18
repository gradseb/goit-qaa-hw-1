// calculate.test.js

const calculateRectangleArea = require('../calculate');

describe('calculate Rectangle Area', () => {
  it('Oblicza pole prostokąta o długości 5 i szerokosci 4', () => {
    expect(calculateRectangleArea(5, 4)).toBe(20);
  });
  it('Oblicza pole prostokąta o długości 3 i szerokosci 7', () => {
    expect(calculateRectangleArea(3, 7)).toBe(21);
  });
  it('Oblicza pole prostokąta o długości 10 i szerokości 10', () => {
    expect(calculateRectangleArea(10, 10)).toBe(100);
  });
});