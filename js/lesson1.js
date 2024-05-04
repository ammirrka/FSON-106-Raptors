//* Розгалуження: if, if...else, else...if
//TODO:============task-1=========================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'Bbcde';

/* if (str.toLowerCase().startsWith('a')) {
    console.log("Yes");
} else {
    console.log("No");
} */

// str.toLocaleLowerCase().startsWith('a') ? console.log("Yes") : console.log("No");

//TODO:============task-2=========================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

/* const firstName = "Віктор";
const lastName = "Сташко";
const firstNameLength = firstName.length;
const lastNameLength = lastName.length; */

/* if (firstNameLength > 4 && lastNameLength > 5) {
    console.log(firstNameLength + lastNameLength);
} else {
    console.log("Неможливо виконати умову");
} */

// firstNameLength > 4 && lastNameLength > 5 ? console.log(firstNameLength + lastNameLength) : console.log("Неможливо виконати умову");



