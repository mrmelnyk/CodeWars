//Complete the class by adding in a constructor that accept a name and an age. Then set a method getter that return the info as a string.

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  get info(){
    return `${this.name}s age is ${this.age}`;
  }
}

const andrew = new Person('Andrew', 34);
console.log(andrew.info)//should log 'Andrews age is 34'
