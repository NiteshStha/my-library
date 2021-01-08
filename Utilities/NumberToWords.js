const numberWordArray = [
  'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty',
  'Twenty One', 'Twenty Two', 'Twenty Three', 'Twenty Four', 'Twenty Five', 'Twenty Six', 'Twenty Seven', 'Twenty Eight', 'Twenty Nine', 'Thirty',
  'Thirty One', 'Thirty Two', 'Thirty Three', 'Thirty Four', 'Thirty Five', 'Thirty Six', 'Thirty Seven', 'Thirty Eight', 'Thirty Nine', 'Forty',
  'Forty One', 'Forty Two', 'Forty Three', 'Forty Four', 'Forty Five', 'Forty Six', 'Forty Seven', 'Forty Eight', 'Forty Nine', 'Fifty',
  'Fifty One', 'Fifty Two', 'Fifty Three', 'Fifty Four', 'Fifty Five', 'Fifty Six', 'Fifty Seven', 'Fifty Eight', 'Fifty Nine', 'Sixty',
  'Sixty One', 'Sixty Two', 'Sixty Three', 'Sixty Four', 'Sixty Five', 'Sixty Six', 'Sixty Seven', 'Sixty Eight', 'Sixty Nine', 'Seventy',
  'Seventy One', 'Seventy Two', 'Seventy Three', 'Seventy Four', 'Seventy Five', 'Seventy Six', 'Seventy Seven', 'Seventy Eight', 'Seventy Nine', 'Eighty',
  'Eighty One', 'Eighty Two', 'Eighty Three', 'Eighty Four', 'Eighty Five', 'Eighty Six', 'Eighty Seven', 'Eighty Eight', 'Eighty Nine', 'Ninety',
  'Ninety One', 'Ninety Two', 'Ninety Three', 'Ninety Four', 'Ninety Five', 'Ninety Six', 'Ninety Seven', 'Ninety Eight', 'Ninety Nine',
];
const digitPlace = ['', 'Thousand', 'Million', 'Billion', 'Trillion']

/*
* Convert Number to words
* @param {string} num The number to be converted into words
*/
function ConvertNumberToWord(num) {
  const floatingValueArray = num.toString().split('.');
  const integerPart = floatingValueArray[0].split('').reverse().join('');
  const fractionalPart = floatingValueArray[1];
  let numericPlaceArray = integerPart.match(/.{1,3}/g);
  numericPlaceArray = numericPlaceArray.map(numeric => numeric.split('').reverse().join(''))
  let textNumber = '';
  numericPlaceArray.forEach((value, index) => {
    let text = '';
    for (let i = 0; i < value.length; i++) {
      // For the case where value length is 3
      if (value.length === 3) {
        // For the case of hundred
        if (+value[i] > 0 && i === 0) {
          text = text.trim() + ` ${numberWordArray[+value[i]]} Hundred`;
        }
        // For the case of 10th digit
        if (+value[i] > 0 && i === 1) {
          text = text.trim() + ` ${numberWordArray[+[value[i] + value[i + 1]]]}`;
        }
        // For the case of 1th digit
        if (+value[i] > 0 && +value[i - 1] === 0 && i === 2) {
          text = text.trim() + ` ${numberWordArray[+value[i]]}`;
        }
      }
      // For the case where value length is 2
      if (value.length === 2) {
        // For the case of 10th digit
        if (+value[i] > 0 && i === 0) {
          text = text.trim() + ` ${numberWordArray[+[value[i] + value[i + 1]]]}`;
        }
      }
      // For the case where value length is 1
      if (value.length === 1) {
        // For the case of 1th digit
        if (+value[i] > 0 && i === 0) {
          text = text.trim() + ` ${numberWordArray[+value[i]]}`;
        }
      }
    }
    textNumber = `${text} ${digitPlace[index]} ` + textNumber.trim();
  })
  if (fractionalPart) {
    textNumber = textNumber.trim() + ' .';
    fractionalPart.split('').forEach(value => {
      textNumber = textNumber.trim() + ` ${numberWordArray[+value]}`;
    });
  }
  return textNumber;
}