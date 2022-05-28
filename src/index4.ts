//  T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型
// 这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 
function identity<T>(arg: T): T {
  return arg;
}
identity(123) // 可以
identity<string>('123') // 可以

let e: (arg: number) => number = identity
// 泛型写法一：函数泛型
let e1: <T>(arg: T) => T = identity
// T只是一个变量名，你可以随意命名，但是不建议
let e2: <U>(arg: U) => U = identity
// 泛型写法二：对象字面量的方式
let e3: { <T>(arg: T): T } = identity
// 泛型写法三：接口方式
interface GenericIdentityFn {
  <T>(arg: T): T;
}
let myIdentity: GenericIdentityFn = identity;
interface GenericIdentityFn1<T> {
  (arg: T): T;
}
let myIdentity1: GenericIdentityFn1<number> = identity;

// 以下是ts定义的Array接口，就使用到了泛型
// interface Array<T>{
//   ...省略
//   [n: number]: T
// }
// 泛型写法
let d: Array<number> = [1, 2, 3, 4]

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

class MinClass<T> {
  public list: T[] = [];
  add(num: T) {
    this.list.push(num)
  }
  min(): T {
    let minNum = this.list[0]
    for (let i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i]
      }
    }
    return minNum
  }
}

// 泛型约束
// 此处是通过Array来保证arg有length属性
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}
loggingIdentity<string>(['1', '2', '3'])

interface LenthWise {
  length: number;
}
// 当arg不是数组时，就可以使用泛型约束来保证变量arg具有length属性
function loggingIdentity1<T extends LenthWise>(arg: T): T {
  console.log(arg.length)
  return arg
}
type LenthWise1 = string
// 这样写也可以
function loggingIdentity2<T extends LenthWise1>(arg: T): T {
  console.log(arg.length)
  return arg
}

// 在泛型约束中使用类型参数
// keyof T代表T的键名
interface Person3 {
  name: string;
  age: number;
}
type K1 = keyof Person3; // K1 = "name" | "age"
type K2 = keyof Person3[]; // K2 = number | "length" | "push" .....
type K3 = keyof { [x: string]: Person3 } // K3 = string | number

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// 在泛型中使用类类型
// new代表是构造函数
function create1<T>(c: {new(): T; }): T {
  return new c();
}
class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animall {
  numLegs: number;
}

class Bee extends Animall {
  keeper: BeeKeeper;
}

class Lion extends Animall {
  keeper: ZooKeeper;
}

function createInstance<A extends Animall>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!