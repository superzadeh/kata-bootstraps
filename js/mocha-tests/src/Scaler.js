// breaks encapsulation!
const widthConstant = 2;
const heightConstant = 3;

export class Scaler {

  computeWidth(scaleFactor) {
    return scaleFactor + 2;
  }

  computeHeight(scaleFactor) {
    return scaleFactor * 2 + 3;
  }
  
}