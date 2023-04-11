/* 
    TASK 1

    У нас есть массив с самыми популярными вкусами чипсов.
    И каждый месяц у нас производится новый вкус. Закончите код до конца так,
    чтобы он определял и возвращал сорт, созданный последним 
    Важно: исходный массив не должен изменяться.
    var flavors = ['Краб', 'Сметана и зелень', 'Малосольные огурчики','Классический', 'С сыром', ‘Паприка'];

*/

// let flavors = ['Краб', 'Сметана и зелень', 'Малосольные огурчики','Классический', 'С сыром', 'Паприка'];
// flavors.push('C соусом коня');

// function lastFlavors(arr) {
//     const result = [];
    
  
//     for(let i = arr.length-1; i >= 0; i--) {
//       result.push(arr[i]);
//     }
    
//     return result;
//   }


// console.log(lastFlavors(flavors));





/* 
    TASK 2
    
    У нас есть массив [1,2,3,4,5]. Необходимо развернуть этот массив БЕЗ СОЗДАНИЯ нового
    В итоге должно получиться: [5,4,3,2,1];
    Используйте только те конструкции, которые мы проходили на уроке.

*/

// let arr = [ 1, 2, 3, 4, 5 ];
// let rev = reverse(arr);

// function reverse(arr) {
//     let rev = new Array;
//     for (var i = arr.length - 1; i >= 0; i--) {
//         rev.push(arr[i]);
//     }
//     return rev;
// }

// console.log(rev);

/* 
    TASK 3
    
    Есть список слов : [‘радар’,’вор’,’букет’,’доход’,’казак’,’варяг’,’потом’].
    Найти среди них палиндромы.
  
     palindroms = ['радар','вор','букет','доход','казак','варяг','потом']
*/
//    
  
//  let palindrome = function (word) {
//     let len = word.length;
//     let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
//     let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
//     let flip = end.split('').reverse().join('');
//     return (start == flip);
//  }

//  console.log(palindrome(''));


  

/* 
    TASK 4
    
    Есть массив чисел : [444,123,-114,231,775,221,766,-557,0]. 
    Необходимо найти максимальное число и вывести его в консоль
    
*/
// const numbers = [444,123,-114,231,775,221,766,-557,0];
// const maxValue = Math.max(...numbers);
// console.log(maxValue);
     
/* 
    TASK 5
    
    Пользователь вводит многозначное число. 
    Напишите функцию, которая принимает число в качестве аргумента
    и вставляет двоеточие (:) между двумя нечетными числами. 
    Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.

*/

// const num = prompt('Введите число');

// function colonOdd (num) {
//   let str = num.toString();
//   let result = [str[0]];
//   for(var i=1; i<str.length; i++) {
//       if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
//         result.push(':', str[i]);
//        }
//       else {
//         result.push(str[i]);
//       }
//   }
//   return result.join('');  
// }

// console.log(colonOdd(num))
   