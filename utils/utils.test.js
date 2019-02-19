const expect = require('expect');
const utils = require('./utils');

it('should add two number', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should async add two number', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should sqare a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
  utils.asyncSquare(3, (square) => {
    expect(square).toBe(9).toBeA('number');
    done();
  });
});

// expect examples
it('should expect some values', () => {
  expect(12).toBe(12);
  expect({name: 'yunier'}).toEqual({name: 'yunier'});
  expect([2, 3, 4]).toInclude(2);
  expect([2, 3, 4]).toExclude(1);
  expect({
    name: 'Yunier',
    age: 24,
    location: 'Philadelphia'
  }).toExclude({
    age: 25
  });
});

it('should set firstName and lastName', () => {
  var user = {location: 'USA', age: 24};
  var res = utils.setName(user, 'Yunier Alvarez');

  expect(res).toInclude({
    firstName: 'Yunier',
    lastName: 'Alvarez'
  });
});