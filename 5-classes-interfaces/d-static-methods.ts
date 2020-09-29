// Static methods
// Static methods aren't called on instances of the class. Instead, they're called on the class itself.
// Its often used for utility functions you want to group to a class.
// Its like the Math object that has many static methods you use, without creating instance of a class

class Calculator {
  static triple(num = 1) {
    return num * 3;
  }
}

console.log(Calculator.triple()); // 3
console.log(Calculator.triple(3)); // 9
