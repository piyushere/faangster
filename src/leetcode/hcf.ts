/**
 * Calculate HCF (**H**ighest **C**ommon **F**actor) of two numbers
 * @param x
 * @param y
 * @returns HCF(x, y)
 */
const hcf = (x: number, y: number) => {
  // small number becomes our divisor and large one becomes dividend
  let [divisor, dividend] = [x, y].sort((a, b) => a - b);

  while (true) {
    const remainder = dividend % divisor;
    if (remainder === 0) return divisor;
    // remainder becomes our divisor and divisor becomes dividend;
    [divisor, dividend] = [remainder, divisor];
  }
};

export default hcf;
