module.exports = function toReadable (number) {
  const words = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
  };

  const str = `${number}`;
  const length = str.length;

  if (number < 20 || (number % 10 === 0 && number < 100)) {
      return words[number];
  } else if (length === 2) {
      const dec = `${str[0]}0`;
      const un = str[1];
      return `${words[dec]} ${words[un]}`;
  } else if (length === 3) {
      const hun = str[0];
      const dec = str.slice(1);
      return `${words[hun]} hundred${dec === '00' ? '' : ' ' + toReadable(+dec)}`;
  }
}
