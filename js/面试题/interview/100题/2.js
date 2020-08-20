const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`my ${this.name},Am${this.isHuman}`);
    }
}
const zhaoboy = Object.create(person);
zhaoboy.name = "酷吧"
zhaoboy.isHuman = true;
// person.__proto__.name = "123";
console.log(zhaoboy);
zhaoboy.printIntroduction()