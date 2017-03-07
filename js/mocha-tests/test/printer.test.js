import {
  Printer
} from '../src/printer';
import {
  ConsoleWriter
} from '../src/ConsoleWriter'

describe('Printer', function () {
  it('should print something to the console', function () {
    // Arrange
    const consoleSpy = sinon.spy();
    const sut = new Printer({
      write: consoleSpy
    }, {
      convert: sinon.stub().returns('Carlos')
    });

    // act
    sut.print('Carlos');

    // assert
    expect(consoleSpy).to.have.been.calledWith('Carlos');
  });
  
  it('should throw if it has no converter', function () {
     const sut = new Printer({});
     expect(() => sut.print('')).to.throw(/No converter has been set/);
  });
});