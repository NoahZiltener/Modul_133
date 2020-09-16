
class Person{
    constructor(firstname, lastname){
        this._firstname = firstname;
        this._lastname = lastname;
        this._fullname = firstname + " " + lastname;
    }

    _firstname = "";
    _lastname = "";

    getFullName(){
        return this._fullname;
    }
}

let person1 = new Person("Noah", "Ziltener");
person1._firstname = "Nick"
let person2 = new Person();
person2._firstname = "Noah";
person2._lastname = "Ziltener"
console.log(person1.getFullName());
console.log(person2.getFullName());
