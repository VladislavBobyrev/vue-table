export const alfabet = "абвгдеёжзиклмнопрстуфкцчшщъыьэюя";

/**  
 * @param alf алфавит
 * @param quantity количество букв  в строке
 * @returns возвращает  строку с заданым алфавитом и  длинной
 */
export const randomString = (alf: string, quantity: number) => {
    let count = 0
    const result = []

    while(count < quantity) {
      count++
       result.push(alf.charAt(Math.random() * alf.length)) 
    }
    
    return result.join('')
  }