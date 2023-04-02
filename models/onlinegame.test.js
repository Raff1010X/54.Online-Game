const { calculate } = require('./onlinegame');
const data = require('../example/example_request.json')
const expected = require('../example/example_response.json')

describe('report', () => {

  it('should return correct account information', () => {
    const result = calculate(data);
    expect(result).toEqual(expected);
  });

});