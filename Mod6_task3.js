/* Задание 3.
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент 
и возвращает сумму этих двух чисел. Выведите в консоль результат. */


function getSum (number1) {
  
    return function (number2) {
      
        return Number(number1) + Number(number2);
    }
}

number1 = prompt('Введите первое число');
number2 = prompt('Введите второе число');

console.log(getSum(number1)(number2));