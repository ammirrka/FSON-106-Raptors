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
