//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];
// function findSmallerNumber(numbers) {
//   let smallestNum = numbers[0];
//   if (Array.isArray(numbers)) {
//     for (const num of numbers) {
//       if (num < smallestNum) {
//         smallestNum = num;
//       }
//     }
//     return smallestNum;
//   }
// }

// console.log(findSmallerNumber(numbers));

// Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку
// const string = "Nunc sed turpis a felis in nunc fringilla"
// const string = "Nunc sed turpis a felis in nunc fringilla"
// function findLongestWord(string) {
//         const arr = string.split(' ');
//         let longestWord = arr[0];
//     for (const item of arr) {
//         if (item.length > longestWord.length) longestWord = item;
//     }
//     return longestWord;
// }
// console.log(findLongestWord(string));
