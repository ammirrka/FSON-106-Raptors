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

//TODO:=======================
//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція вважає, що м повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта
// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 6 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   for (const stone of stones) {
//     if (stonesName === stone.name) {
//      console.log(stone);
//       const totalPrice = stone.price * stone.quantity;
//       return `${stone.name} will cost ${totalPrice}`;
//     }
//   }

// }
// console.log(calcTotalPrice(stones, "Діамант"));

// TASK 4

//^ TODO:==========================
//Напишіть функцію makeInvetedString(), яка замінює регістр кожного символу
//У сторіччі на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

// function makeInvetedString(str) {
//   let arr = str.split("");
//   const newArr = [];
//   for (const letter of arr) {
//     if (letter === letter.toLowerCase()) {
//       newArr.push(letter.toUpperCase());
//     } else {
//         newArr.push(letter.toLowerCase());
//     }
//     }
//     return newArr.join("");
// }
// console.log(makeInvetedString("JavaScript"));

// function makeInvetedString(str) {
//   let newStr = "";
//   for (const letter of str) {
//     if (letter === letter.toLowerCase()) {
//       newStr+=letter.toUpperCase();
//     } else {
//       newStr+=letter.toLowerCase();
//     }
//   }
//   return newStr;
// }
// console.log(makeInvetedString("JavaScript"));
