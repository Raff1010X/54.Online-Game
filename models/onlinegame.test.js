const { calculate } = require('./onlinegame');
const data = require('../example/example_request.json')
const expected = require('../example/example_response.json')

describe('calculate', () => {

  it('should return correct data', () => {
    const result = calculate(data);
    expect(result).toEqual(expected);
  });

});