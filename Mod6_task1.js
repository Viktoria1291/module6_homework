/* Задание 1.
В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой 
элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null 
и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, 
проанализируйте синтаксис. */

let arr = ['n', 6, 0, 'm', null, 5, 9, 'h', 0];

function countingElements () {

let even = 0; // четный (будет как счетчик)
let uneven = 0; // нечетный (будет как счетчик)
let zero = 0; // ноль (будет как счетчик)
let other = 0; // другое (будет как счетчик)

for (let i = 0; i <= arr.length - 1; i++) {
if ((typeof(arr[i]) == 'number') && (arr[i] %2 == 0) && (arr[i] !== 0)) { // четное число
  even++; 
}
else if ((typeof(arr[i]) == 'number') && (arr[i] %2 !== 0) && (arr[i] !== 0)) { // нечетное число
  uneven++;  
}
else if (arr[i] === 0) { // ноль
  zero++;  
}
else { // другое
  other++;
}
}
return [even, uneven, zero, other];
}

const result = countingElements ();

console.log ('Even is ' + result[0]);
console.log ('Uneven is ' + result[1]);
console.log ('Zero is ' + result[2]);
console.log ('Other is ' + result[3]);