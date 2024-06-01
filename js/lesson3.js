//! 11. Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }
//     getlogin() {
//         return this.#login;
//     }
//     set login(newLogin) {
//         this.#login = newLogin;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const alex = new Client("Alex111", "alex@gmail.com");
// console.log(alex);
// console.log(alex.getlogin());
// alex.login = "Alex123";
// console.log(alex.login);

//* 12. Напиши клас Notes який управляє колекцією нотаток у //Властивості items. //Нотатка це об'єкт із властивостями id, text і priority //Додай класу статичний метод Priopity, //у якому зберігатиметься об'єкт із пріоритетами HIGHT, LOW. //Додай методи addNote(note), removeNote(id) //updatePriority(text, newPriority)

// class Notes {
//   static Priority = {
//     HIGHT: "higher",
//     LOW: "lower",
//   };
//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     // const id = Math.round(Math.random() * 1000000);
//     // this.items.push({ id, ...note });
//     this.items.push(note);
//   }
//   removeNote(id) {
//     this.items = this.items.filter((note) => id !== note.id);
//   }

//   updatePriority(text, newPriority) {
//     this.items.forEach((note) => {
//       if (note.text === text) {
//         note.priority = newPriority;
//       }
//     });
//   }
// }

// const note1 = new Notes();
// console.log(note1.items);
// note1.addNote({ id: 1, text: "Note1", priority: Notes.Priority.LOW });
// note1.addNote({ id: 2, text: "Note2", priority: Notes.Priority.LOW });
// note1.addNote({ id: 3, text: "Note3", priority: Notes.Priority.HIGHT });
// console.log(note1.items);
// note1.removeNote(2);
// note1.updatePriority({ text: "Note2", newPriority: Notes.Priority.HIGHT });
// console.log(note1.items);

// TODO:==============================================
const users = [
    {
      id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      id: "249b6175-5c30-44c6-b154-f120923736f5",
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    },
    {
      id: "150b00fb-dd82-427d-9faf-2879ea87c695",
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      skills: ["non", "amet", "ipsum"],
      gender: "male",
      age: 38,
    },
    {
      id: "e1bf46ab-7168-491e-925e-f01e21394812",
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      skills: ["lorem", "veniam", "culpa"],
      gender: "female",
      age: 39,
    },
  ];
// Отримати масив імен користувачів за статтю (поле gender) за допомогою reduce
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// function getUsersWithGender(users,gend) {
//     return users.reduce((names, {name,gender}) => {
//         if (gender === gend) {
           
//             names.push(name);
//         }
//         return names;
//     },[]);
// }
// const { skills: [first, second] } = users[0]
// console.log(first, second);

//TODO:==============================================
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916
//TODO:==============================================
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']
//TODO:==============================================
// Отримати користувача (не масив) по email (поле email, він унікальний).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
//TODO:==============================================
// Отримати масив користувачів віком від min до max
// console.log (getUsersWithAge (users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log (getUsersWithAge (users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]