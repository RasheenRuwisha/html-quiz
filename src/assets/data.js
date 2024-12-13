export const data = [
  {
    code: `const obj = { name: "Alice", age: 25 };
    console.log(obj.name);`,
    question:
      "What will be printed when accessing the `name` property of the `obj` object?",
    options: ["Alice", "undefined", "Error", "null"],
    ans: "Alice",
  },
  {
    code: `class Employee {
      constructor() {
        this._salary = 0;
      }

      get salary() {
        return this._salary;
      }

      set salary(value) {
        if (value > 0) {
          this._salary = value;
        }
      }
    }

    const emp = new Employee();
    emp.salary = 5000;
    console.log(emp.salary);`,
    question:
      "What will be the output of `console.log(emp.salary)` after setting `emp.salary = 5000`?",
    options: ["5000", "0", "undefined", "Error"],
    ans: "5000",
  },
  {
    code: `let num = 10;
    if (num % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }`,
    question: "What will the code print when the value of `num` is 10?",
    options: ["Even", "Odd", "Error", "Undefined"],
    ans: "Even",
  },
  {
    code: `let sum = 0;
    for (let i = 1; i <= 5; i++) {
      sum += i;
    }
    console.log(sum);`,
    question: "What is the sum of numbers from 1 to 5 printed by the code?",
    options: ["10", "15", "20", "Error"],
    ans: "15",
  },
  {
    code: `let count = 0;
    while (count < 3) {
      console.log(count);
      count++;
    }`,
    question: "What numbers are printed by the code inside the `while` loop?",
    options: ["0 1 2", "1 2 3", "0 1 2 3", "Infinite loop"],
    ans: "0 1 2",
  },
  {
    code: `const car = {
      brand: "Toyota",
      getBrand: function () {
        return this.brand;
      },
    };

    console.log(car.getBrand());`,
    question: "What will `console.log(car.getBrand())` output?",
    options: ["Toyota", "undefined", "Error", "null"],
    ans: "Toyota",
  },
  {
    code: `let x = 5;
    if (x > 0) {
      if (x < 10) {
        console.log("x is between 0 and 10");
      }
    }`,
    question: "What will be printed if `x` is set to 5?",
    options: ["x is between 0 and 10", "undefined", "Error", "No output"],
    ans: "x is between 0 and 10",
  },
  {
    code: `const greet = (name) => \`Hello, \${name}!\`;
    console.log(greet("John"));`,
    question: "What will the arrow function print when passed the name 'John'?",
    options: ["Hello, John!", "Hello, undefined!", "Error", "Hello!"],
    ans: "Hello, John!",
  },
  {
    code: `class Student {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    }

    const s = new Student("Alice", 20);
    console.log(s.name, s.age);`,
    question: "What will be printed when accessing `s.name` and `s.age`?",
    options: ["Alice 20", "undefined undefined", "null null", "Error"],
    ans: "Alice 20",
  },
  {
    code: `function multiply(a, b = 2) {
      return a * b;
    }

    console.log(multiply(5));`,
    question:
      "What will `multiply(5)` return when the second argument is not provided?",
    options: ["10", "5", "undefined", "Error"],
    ans: "10",
  },
  {
    code: `const person = { name: "John" };
    person.name = "Jane";
    console.log(person.name);`,
    question:
      "What will `console.log(person.name)` output after changing `name` to 'Jane'?",
    options: ["Jane", "John", "undefined", "Error"],
    ans: "Jane",
  },
  {
    code: `for (let i = 0; i < 5; i++) {
      if (i === 3) break;
      console.log(i);
    }`,
    question: "What numbers will the `for` loop print before breaking?",
    options: ["0 1 2", "0 1 2 3 4", "0 1 2 3", "Error"],
    ans: "0 1 2",
  },
  {
    code: `const arr = [1, 2, 3];
    arr.forEach((num) => console.log(num * 2));`,
    question: "What is the output when each element in `arr` is doubled?",
    options: ["2 4 6", "1 2 3", "undefined", "Error"],
    ans: "2 4 6",
  },
  {
    code: `let color = "red";
    switch (color) {
      case "blue":
        console.log("Blue");
        break;
      case "red":
        console.log("Red");
        break;
      default:
        console.log("Unknown");
    }`,
    question: "What will the `switch` statement print if the `color` is 'red'?",
    options: ["Red", "Blue", "Unknown", "Error"],
    ans: "Red",
  },
  {
    code: `class Calculator {
      add(a, b) {
        return a + b;
      }
    }

    const calc = new Calculator();
    console.log(calc.add(5, 10));`,
    question: "What is the result of calling `calc.add(5, 10)`?",
    options: ["15", "undefined", "Error", "null"],
    ans: "15",
  },
  {
    code: `const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log(arr2);`,
    question:
      "What will `console.log(arr2)` print after using the spread operator?",
    options: ["[1, 2, 3, 4, 5]", "[4, 5]", "[1, 2, 3]", "Error"],
    ans: "[1, 2, 3, 4, 5]",
  },
  {
    code: `const isEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
    console.log(isEven(7));`,
    question: "What will `isEven(7)` return?",
    options: ["Odd", "Even", "undefined", "Error"],
    ans: "Odd",
  },
  {
    code: `class MathUtil {
      static square(num) {
        return num * num;
      }
    }

    console.log(MathUtil.square(4));`,
    question: "What does `MathUtil.square(4)` return?",
    options: ["16", "undefined", "Error", "null"],
    ans: "16",
  },
  {
    code: `const { name, age } = { name: "John", age: 30 };
    console.log(name, age);`,
    question:
      "What will `console.log(name, age)` print after destructuring the object?",
    options: ["John 30", "undefined undefined", "Error", "null"],
    ans: "John 30",
  },
  {
    code: `const obj = {
      name: "Alice",
      age: 25,
      greet() {
        return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
      },
    };

    console.log(obj.greet());`,
    question: "What is the output of `obj.greet()`?",
    options: [
      "Hello, my name is Alice and I am 25 years old.",
      "undefined",
      "Error",
      "null",
    ],
    ans: "Hello, my name is Alice and I am 25 years old.",
  },
];
