const expect = require('expect');

describe('App', () => {
  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Yuier', 24);
    expect(spy).toHaveBeenCalledWith('Yuier', 24);
  });
});