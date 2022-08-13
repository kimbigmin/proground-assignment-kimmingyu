const convertNumber = (num: string): string => {
  const reversedNumArr = num.split("").reverse();
  let output: string[] = [];

  reversedNumArr.forEach((el, idx) => {
    idx !== 0 && idx % 3 === 0 ? output.push(`${el},`) : output.push(el);
  });

  return output.reverse().join("");
};

export default convertNumber;
