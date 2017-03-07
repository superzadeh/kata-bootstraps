import {
  Scaler
} from '../src/Scaler';

const scaler = new Scaler();
describe('Scaler', function () {

  it('should add 2 to the the scale factor to compute the width', function () {
    expect(scaler.computeWidth(1)).to.be.equal(3);
    expect(scaler.computeWidth(2)).to.be.equal(4);
    expect(scaler.computeWidth(3)).to.be.equal(5);
  });

  it('should multiply the scale factor by 2 and add 3 to compute the height', function () {
    expect(scaler.computeHeight(1)).to.be.equal(5);
    expect(scaler.computeHeight(2)).to.be.equal(7);
    expect(scaler.computeHeight(3)).to.be.equal(9);
  });

});