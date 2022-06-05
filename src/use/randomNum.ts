/**  
 * @param min минималное значение 
 * @param max максимальное значение
 * @param fixNumber количество цифр после запятой
 * @returns возвращает  число от минимального значения до максимального и округленного до переданного значения после запятой
 */
export const randomNumber = (min: number, max: number, fixNumber: number): number => {
  const result =  Math.random() * (max - min) + min;
  return +result.toFixed(fixNumber)
}