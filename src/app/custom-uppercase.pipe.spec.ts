import { CustomUppercasePipe } from './custom-uppercase.pipe';

describe('CustomUppercasePipe', () => {
  let pipe: CustomUppercasePipe;

  beforeEach(() => {
    pipe = new CustomUppercasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a string to uppercase', () => {
    const result = pipe.transform('hello world');
    expect(result).toEqual('HELLO WORLD');
  });

  it('should return an empty string when passed an empty string', () => {
    const result = pipe.transform('');
    expect(result).toEqual('');
  });
});