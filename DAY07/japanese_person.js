class JapanesePerson{
    static nationality = "Japan";
    #firstname;
    #lastname;
    constructor(firstname, lastname){
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
    getFullname(){
        return this.#lastname + this.#firstname;
    }
    getNationality(){
        return JapanesePerson.nationality;
    }
    // static getNationality(){
    //     return this.#nationality;
    // }
}

function main(){
    const person = new JapanesePerson("太郎", "湘南");
    console.log(person.getFullname());  // 湘南太郎
    console.log(JapanesePerson.nationality);  // Japan
    console.log(person.getNationality());  // undefined
    // console.log(JapanesePerson.getNationality());
}

main();