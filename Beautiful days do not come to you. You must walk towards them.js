const translateShift = (str) => {
  const corrected = [];
  const keyboard = `qwertyuiop[]\asdfghjkl;'zxcvbnm,.`;
  for (var i = 0; i < str.length; i++) {
    let actualLetter = keyboard[keyboard.indexOf(str[i]) - 1];
    actualLetter ? corrected.push(actualLetter) : corrected.push(" ");
  }
  return corrected.join("");
};

translateShift("vtsmnrttu");
translateShift(";p; epe");
translateShift("js. movr");
