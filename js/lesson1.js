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

//TODO:============task-3=========================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const number = prompt("Enter number");
// function checkNumber(num) {
// if (num >=55 && num<=99) {
//     return "Число потрапляє в діапазон";
// } else {
//     return "Число не потрапляє в діапазон";
// };
//     return num >= 55 && num <= 99
//         ? "Число потрапляє в діапазон"
//         : "Число не потрапляє в діапазон";
// }

// console.log(checkNumber(number));

//TODO:============task-4=========================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = prompt("Enter age Maxim");

// if (ageMaxim >=0 && ageMaxim<= 16) {
//     console.log("діти");
// } else if (ageMaxim >= 17 && ageMaxim <= 60) {
//     console.log("дорослі");
// } else if(ageMaxim>=61 && ageMaxim<=100){
//     console.log("пенсіонери");
// } else {
//     console.log("Такої категорії не існує");
// }

//TODO:============task-5=========================
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

const drink = prompt("Який напій бажаєте?").toLowerCase();

function orderDrink(type) {
  //   let price = 0;

  switch (type) {
    case "кава":
      return "Сума до сплати 40 грн";
    //   price = 40;
    //   break;

    case "чай":
      return "Сума до сплати 25 грн";
    //   price = 25;
    //   break;

    case "сік":
      return "Сума до сплати 50 грн";
    //   price = 50;
    //   break;

    default:
      return "Напій відсутній";
    //   break;
  }

  //   alert(`Сума до сплати ${price} грн`);
}

alert(orderDrink(drink));
