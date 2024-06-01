//! 11. Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email


class Client {
    #login;
    #email;
    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }
    getlogin() {
        return this.#login;
    }
    set login(newLogin) {
        this.#login = newLogin;
    }
    get email() {
        return this.#email;
    }
    set email(newEmail) {
        this.#email = newEmail;
    }
}

const alex = new Client("Alex111", "alex@gmail.com");
console.log(alex);
console.log(alex.getlogin());
alex.login = "Alex123";
console.log(alex.login);

