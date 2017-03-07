import {
  Scaler
} from './Scaler';

export const ValueMap = {
  0: `
 -
| |

| |
 - 
`
};

export class Converter {

  buildMatrix(scaleFactor) {

    for (var rowIndex = 0; rowIndex < height; rowIndex++) {
      for (var columnIndex = 0; columnIndex < width; columnIndex++) {


      }
    }
  }

  convert(intValue) {

    if (intValue !== parseInt(intValue)) {
      throw new Error('Can only convert integers');
    }
    if (intValue < 0 || intValue > 9) {
      throw new Error('Can only convert numbers from 0 to 9');
    }

    return ValueMap[intValue];
  }
}