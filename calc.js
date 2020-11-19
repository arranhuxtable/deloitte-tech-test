function calculateLettersFromFactor(number) {

  // Ensuring you give me a integer
  if (!number || !Number.isInteger(number)) {
    throw "You didn't give me a number!";
  }

  // Starts off empty string
  returnString = '';

  // If the int is divisible cleanly by 3, 5 or 7
  if(!(number % 3)) returnString += 'Pling'
  if(!(number % 5)) returnString += 'Plang'
  if(!(number % 7)) returnString += 'Plong'

  // If I don't have anything by this point, it wasn't hit by the above
  // so just return the number itself as a string
  if (!returnString) {
    returnString = number.toString();
  }

  // return the calculated string
  return returnString;
}
module.exports = calculateLettersFromFactor;
