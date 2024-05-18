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

//^ TODO:============================
//Напишіть функцію unique(arr), яка повертає масив,
//містить лише унікальні елементи arr.
// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
// ];

// function unique(arr) {
//   let newArr = [];
//   for (const item of arr) {
//     if (!newArr.includes(item)) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }

// console.log(unique(words));



// TASK 6

//Напишіть функції для роботи з масивом
//add(name) додає курс до кінця колекції
//removeCourse(name) видаляє курс із колекції
//updateCourse(oldName, newName) змінює ім'я на нове
// const courses = ["HTML", "CSS", "JavaScript", "React"];

// function addCourse(name) {
//     courses.push(name);
// }
// function removeCourse(name) {
//     const index = courses.indexOf(name);
//     if (index!==-1) {
//       courses.splice(index, 1);
//     } else {
//       console.log(`Course ${name} not found`);
//     }
// }
// function updateCourse(oldName, newName) {
//     const index = courses.indexOf(oldName);
//     if (courses.includes(oldName)) {
//       courses[index] = newName;
//     } else {
//       console.log(`Course ${oldName} not found`);
//     }
// }
// addCourse("Node.js");
// console.log(courses); // ["HTML", "CSS", "JavaScript", "React", "Node.js"]
// removeCourse("React");
// console.log(courses); //: ["HTML", "CSS", "JavaScript", "Node.js"]
// updateCourse("JavaScript", "TypeScript");
// console.log(courses); // ["HTML", "CSS", "TypeScript", "Node.js"]
// removeCourse("Ruby"); // Course Ruby not found
// updateCourse("Python", "Django"); // Course Python not found


// TASK-7


// Угруповання об'єктів студентів по курсам
// Створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт повинен містити властивості ім'я, вік та курс.
// Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об'єкт, де ключами будуть назви курсів, а значення – масиви об'єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Карл", age: 21, course: "Java" },
//   ],
//   Python: [{ name: "Боб", age: 22, course: "Python" }],
//   JavaScript: [{ name: "Джон", age: 23, course: "JavaScript" }],
// };
//   const students = [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Боб", age: 22, course: "Python" },
//     { name: "Карл", age: 21, course: "Java" },
//     { name: "Джон", age: 23, course: "JavaScript" },
//   ];


// function groupStudentsByCourse(students){
// const groupedStudents = {};
// for(const student of students){
     
//      if(!groupedStudents[student.course]){
//           groupedStudents[student.course] = [];
//      }
//      groupedStudents[student.course].push(student);
// }
// return groupedStudents;
// }
// console.log(groupStudentsByCourse(students));