import hello from '../hello';

describe('#hello', () => {
  it('should work', () => {
    expect(hello()).toBe('Hello World!');
  });
});
