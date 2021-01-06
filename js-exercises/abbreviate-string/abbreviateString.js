function checkString(str) {
  return typeof str === "string";
}

function abbreviateString(str) {
  if (!checkString(str)) {
    throw new TypeError("Invalid Input, Input Should be a String");
  }

  const firstWord = str.trim().split(' ')[0];
  const lastWordAbbreviated = str.trim().split(' ').pop()[0].toUpperCase();

  return firstWord + ' ' + lastWordAbbreviated + '.';

}

export { abbreviateString };
