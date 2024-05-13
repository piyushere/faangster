import hcf from './hcf';

/**
 * Calculate LCM (**L**owest **C**ommon **M**ultiple) of two numbers
 * @param x
 * @param y
 * @returns
 */
const lcm = (x: number, y: number) => {
  const HCF = hcf(x, y);
  const mul = x * y;
  return mul / HCF;
};

export default lcm;
