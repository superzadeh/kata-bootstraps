import {
  Converter,
  ValueMap
} from '../src/converter';

const converter = new Converter();
describe('Converter', function () {

  it('should throw when converting somethign else than an integer', function () {
    expect(() => converter.convert('')).to.throw(/Can only convert integers/);
  });

  it('should only accept numbers from 0 to 9', function () {
    expect(() => converter.convert(10)).to.throw(/Can only convert numbers from 0 to 9/);
  });

  it('should return the string representation of the given number', function () {
    expect(converter.convert(0)).to.equal(ValueMap[0]);
  });
});