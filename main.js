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


//   console.log(flavors[flavors.length - 1])





/* 
    TASK 2
    
    У нас есть массив [1,2,3,4,5]. Необходимо развернуть этот массив БЕЗ СОЗДАНИЯ нового
    В итоге должно получиться: [5,4,3,2,1];
    Используйте только те конструкции, которые мы проходили на уроке.

*/
// var arr = [1,2,3,4,5];
// var temp;
// for(var i=0,j=arr.length-1; i<j; i++,j--)
// {
//     temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp;
// }
// console.log(arr)



/* 
    TASK 3
    
    Есть список слов : [‘радар’,’вор’,’букет’,’доход’,’казак’,’варяг’,’потом’].
    Найти среди них палиндромы.
  
     palindroms = ['радар','вор','букет','доход','казак','варяг','потом']
*/
//    

// let palindroms = ['радар','ВОр','букет','доход','казак','Варяг','потом'];
  
// function isPalindrome(word) {
//     const firstHalf = word.slice(0, Math.ceil(word.length/2));
//     const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');

//     return firstHalf === secondHalfReversed;
// }

// function getPalindromesFromArray(arr) {
//     return arr.filter(isPalindrome);
// }

// console.log(getPalindromesFromArray(palindroms));


/* 
    TASK 4
    
    Есть массив чисел : [444,123,-114,231,775,221,766,-557,0]. 
    Необходимо найти максимальное число и вывести его в консоль
    
*/
// const numbers = ;
// const maxValue = Math.max(...numbers);
// console.log(maxValue);

// var list = [444, 123, -114, 231, 775, 221, 766,-557,0]; 
// function maxElement(arr){
//     let max;
//     let min = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== 0 && arr[i] < min){
//             min = arr[i]; 
//         } else if (arr[i] !== 0 ){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(maxElement(list));
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
   