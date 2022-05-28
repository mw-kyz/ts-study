// 类的注解
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return "Hello, " + this.greeting
  }
}

let greeter = new Greeter("world")

// 继承
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`)
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!')
  }
}

const dog = new Dog()
dog.bark()
dog.move(10)
dog.bark()

// 复杂的继承
class Animal1 {
  name: string
  constructor(theName: string) { this.name = theName }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal1 {
  constructor(name: string) { super(name) }
  move(distanceInMeters = 5) {
    console.log("Slithering...")
    super.move(distanceInMeters)
  }
}

class Horse extends Animal1 {
  constructor(name: string) { super(name) }
  move(distanceInMeters = 45) {
    console.log("Galloping...")
    super.move(distanceInMeters)
  }
}

let sam = new Snake("Sammy the Python")
let tom: Animal1 = new Horse("Tommy the Palomino")

sam.move()
tom.move(34)

// 封装：
// public: 自身调用、子类可以调用、实例调用
// protected：自身调用、子类可以调用
// private：自身调用
class Animal2 {
  public name: string
  public constructor(theName: string) {
    this.name = theName
  }
  public move(distanceInMeters: number = 0) {
    // 自身调用
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

// 子类可以调用（继承）
class Snake1 extends Animal2 {
  constructor(name: string) { super(name) }
  move(distanceInMeters = 5) {
    console.log("Slithering...")
    super.move(distanceInMeters)
  }
}

let Jake= new Animal2('Jake')
// 实例调用
Jake.move()

// readonly修饰符，不能修饰方法（constructor也属于方法）
class Octopus {
  public readonly name: string;
  protected readonly numberOfLegs: number = 8;
  constructor (theName: string) {
      this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

class Animal3 {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  move(distanceInMeters: number = 0) {
    // 自身调用
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}
// 以上可以通过参数属性简写为：
class Animal4 {
  constructor(private name: string) {}
  move(distanceInMeters: number = 0) {
    // 自身调用
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

// 普通的类
class Employee {
  fullName: string = ''
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);
}

let passcode = "secret passcode";
// 用存取器改造以上类
class Employee1 {
  private _fullName: string = ''

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    }
    else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}

let employee1 = new Employee1();
employee1.fullName = "Bob Smith";
if (employee1.fullName) {
  alert(employee1.fullName);
}

// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法, 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
      console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

  constructor() {
      super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
      console.log('Generating accounting reports...');
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在


class Greeter1 {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "Hello, " + this.greeting;
    }
    else {
      return Greeter1.standardGreeting;
    }
  }
}

// 此处类型是 Greeter1 类的实例对象
let greeter1: Greeter1;
greeter1 = new Greeter1();
console.log(greeter1.greet());
// 此处的类型是 Greeter1 这个构造函数
let greeterMaker: typeof Greeter1 = Greeter1;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

// 把类当做接口使用
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};