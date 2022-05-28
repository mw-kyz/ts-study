// 对对象的形状进行描述
// 对类的一部分行为的抽象

interface Person1 {
  readonly id: number // 只读，不能修改
  name: string // 必须存在此属性
  age?: number // 可选属性，可有可无
  [propName: string]: any // 代表任意未被声明的属性，可以是多个
}

let person1: Person = {
  id: 1,
  name: 'zhangsan',
  age: 18,
  sex: 'male',
  car: 'maz',
  wife: 14
}

// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let c: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = c;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// c = ro; // error!

// 接口描述函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
// 函数注解的普通方式
function mySearch1(source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
}
// 函数注解的表达式方式
let mySearch2: (source: string, subString: string) => boolean = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
}
// 函数注解的type方式
type SearchFunc1 = (source: string, subString: string) => boolean
let mySearch3: SearchFunc1 = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
}

// 可索引的类型
// 共支持两种索引签名，number和string，其中number索引最终也会转换成字符串
// 数字索引的返回值必须是字符串索引返回值类型的子类型,这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
class Animal5 {
  name: string;
}
class Dog5 extends Animal5 {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// 因为数字索引的返回值必须是字符串索引返回值类型的子类型，此处反了
interface NotOkay {
  // [x: number]: Animal5;
  [x: string]: Dog5;
}

// 正确
interface NotOkay1 {
  [x: string]: Animal5;
  [x: number]: Dog5;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  // name: string       // 错误，因为[index: string]: number相当于大条件，需符合这个大条件
}

interface NumberDictionary1 {
  [index: string]: number | string;
  length: number;    // 可以，length是number类型
  name: string       // 可以
}

// 设置为只读
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!，因为是只读的

// 类类型接口: 抽象公共的属性和方法，抽成一个接口
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
interface ClockInterface1 {
  color: string
}
class Door {}
// 可以同时继承父类及接口，接口也可以同时继承多个
class Clock extends Door implements ClockInterface, ClockInterface1 {
  currentTime: Date;
  color: string;
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { super() }
}

// 类静态部分与实例部分的区别
// 其中constructor属于类的静态部分，不在ts的检查范围之内
// 所以要想检查constructor，就需要通过以下方法
// 因为createClock的第一个参数是ClockConstructor类型，在createClock(AnalogClock, 7, 32)里，会检查AnalogClock是否符合构造函数签名
// 此接口为静态部分使用
interface ClockConstructor {
  // new 代表构造器
  new (hour: number, minute: number): ClockInterface3;
  getTime(): void;

}
// 此接口为实例部分使用
interface ClockInterface3 {
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface3 {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface3 {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
  static getTime() {}
}
class AnalogClock implements ClockInterface3 {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
  static getTime() {}
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

// 接口继承
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}
// 断言
let square = <Square>{};
// 断言也可以这么写
let square1 = {} as Square
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
// 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() { }
}

// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//   select() { }
// }