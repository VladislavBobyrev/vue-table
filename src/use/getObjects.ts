import {randomString, alfabet} from '@/use/randomAlfabet'
import {randomNumber} from '@/use/randomNum'

export const arrObjects: any = []

interface TableObjects {
  name: string, 
  price: number, 
  amount: number,
  cost?: number, 
}
/**
 * @function getObjects формирует массив обьектов для таблицы
 * @param count количество обьектов
 * @returns arrObjects массив обьектов со значениями name, price, amount
 */
export const getObjects = (count:number):TableObjects[] => {
  while(count > 0) {
    const object = {
      name: randomString(alfabet, 5),
      price: randomNumber(0.01, 1000.00, 2),
      amount: randomNumber(1, 100, 0),
    }

    arrObjects.push(object)
    count--
  }
  return arrObjects
}
