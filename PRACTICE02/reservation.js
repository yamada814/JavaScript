export default class Reservation{
    #id;
    #date;
    #name;
    constructor(id, date, name){
        this.#id = id;
        this.#date = date;
        this.#name = name;
    };
    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }
    get date() {
        return this.#date;
    }
    set date(date) {
        this.#date = date;
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }

    toString() {
        const datestr = `${this.#date.getFullYear()}年${this.#date.getMonth() + 1}月${this.#date.getDay()}日`
        return `id:${this.id},date:${datestr},name:${this.name}`
    }


}

