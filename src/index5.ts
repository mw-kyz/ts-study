// 交叉类型
// 交叉类型是将多个类型合并为一个类型。
// 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。 例如， Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员
function extend<T extends Object, U extends Object>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

class Person {
  constructor(public name: string) { }
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
      // ...
  }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n1 = jim.name;
jim.log();

interface Sentence {
  content: string;
  title: string;
}

interface Music {
  url: string;
}

class Test<T extends Sentence & Music> {
  props: T
  constructor(public arg: T) {
    this.props = arg
  }

  info() {
    return {
      url: this.props.url,
      content: this.props.content,
      title: this.props.url
    }
  }
}


// 数字枚举
enum Direction {
  Up,
  Left,
  Right,
  Down
}
console.log(Direction.Up) // 0  默认为0
console.log(Direction.Left) // 1 依次递增
console.log(Direction.Right) // 2 依次递增
console.log(Direction.Down) // 3 依次递增

enum Direction1 {
  Up = 1,
  Left,
  Right,
  Down
}
console.log(Direction1.Up) // 1  初始值为1
console.log(Direction1.Left) // 2 从1依次递增
console.log(Direction1.Right) // 3 依次递增
console.log(Direction1.Down) // 4 依次递增

enum Response1 {
  No = 0,
  Yes = 1
}
// 枚举既可以当做值，也可以当做类型
function respond(recipient: string, message: Response1): void {
  // ...
}
respond("Princess Caroline", Response1.Yes)

function getSomeValue(): number {
  return 2
}
// 枚举值也可以是表达式，但是需放在最后
// 正确
enum E {
  A, // 0
  B = getSomeValue() // 2
}
// 错误
enum E1 {
  A = getSomeValue(), // 2
  // B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
}
// 这也是可以的
enum E2 {
  A = 1 * 3, // 3
  B, // 4
  C = 1 * 3, // 3
  D // 4
}

// 字符串枚举
enum Direction2 {
  Up = "UP",
  Left = "LEFT",
  Right = "RIGHT",
  Down = "DOWN"
}
console.log(Direction2.Up) // UP
console.log(Direction2.Left) // LEFT
console.log(Direction2.Right) // RIGHT
console.log(Direction2.Down) // DOWN
console.log(Direction2)

// 异构枚举
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  No1, // 1 依次累加
  No2, // 2 依次累加
  Yes = "YES",
}
console.log(BooleanLikeHeterogeneousEnum)

// 枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：
// 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
// 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
// 带括号的常量枚举表达式
// 一元运算符 +, -, ~其中之一应用在了常量枚举表达式
// 常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
// 所有其它情况的枚举成员被当作是需要计算得出的值。
enum FileAccess {
  // constant members
  None,  // 0
  Read = 1 << 1, // 2: 0001 => 0010 => 2
  Write = 1 << 2,  // 4: 0001 => 0100 => 2
  ReadWrite = Read | Write, // 6: 0010 | 0100 => 0110 => 6
  X, // 7 根据上一个枚举值进行累加
  // computed member
  G = "123".length // 3
}

// 联合枚举与枚举成员的类型
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let ci: Circle = {
  // kind: ShapeKind.Square, //    ~~~~~~~~~~~~~~~~ Error!
  kind: ShapeKind.Circle, // 这里需要取ShapeKind.Circle的值，因为类型Circle里面定义的类型为ShapeKind.Circle
  radius: 100,
}

enum E3 {
  Foo,
  Bar,
}

function f(x: E3) {
  // 条件有问题，这里不是Foo就是Bar，这样写，逻辑有问题
  // if (x !== E3.Foo || x !== E3.Bar) {
  //     //             ~~~~~~~~~~~
  //     // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
  // }
  if (x !== E3.Foo) {
      //             ~~~~~~~~~~~
      // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
  }
}

// 运行时的枚举
enum E4 {
  X, Y, Z
}

function fun(obj: { X: number }) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
fun(E4);

// 反向映射(只有数字枚举会，字符串枚举不会，异构枚举中的数字枚举也会)
enum Enum {
  A
}
let aa = Enum.A;
let nameOfA = Enum[aa]; // "A"
console.log(Enum) // { A: 0, 0: 'A' }

// const枚举 (会被销毁)
// 大多数情况下，枚举是十分有效的方案。 然而在某些情况下需求很严格。 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举。 常量枚举通过在枚举上使用 const修饰符来定义。
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
// console.log(Directions) // 报错，"const" 枚举仅可在属性、索引访问表达式、导入声明的右侧、导出分配或类型查询中使用
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
console.log(directions) // [0, 1, 2, 3]
console.log(Directions.Up) // 0
console.log(Directions.Down) // 1
console.log(Directions.Left) // 2
console.log(Directions.Right) // 3
// console.log(Directions) // 报错，"const" 枚举仅可在属性、索引访问表达式、导入声明的右侧、导出分配或类型查询中使用

// 外部枚举：外部枚举用来描述已经存在的枚举类型的形状。
// 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
declare enum Enum2 {
  A = 1,
  B,
  C = 2
}