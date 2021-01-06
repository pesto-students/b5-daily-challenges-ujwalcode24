const alphabeticShift = inputString => {
  let newString = [];
  for(let char of inputString){
    let shiftedChar = String.fromCharCode(char.charCodeAt()+1)

    if(shiftedChar === '['){
      shiftedChar = 'A';
    } else if(shiftedChar === '{'){
      shiftedChar = 'a';
    }

    newString.push(shiftedChar)
  }

  return newString.join('');

};

export { alphabeticShift };

