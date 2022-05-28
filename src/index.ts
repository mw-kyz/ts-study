// boolean
let isShow: boolean = false

// number
let decLiteral: number = 6 // 十进制
let hexLiteral: number = 0xf00d // 16进制
let binaryLiteral: number = 0b1010 // 二进制
let octalLiteral: number = 0o744 // 八进制

// string
let str: string = 'Join'
let str1: string = `Hello, my name is ${str}`

// any: 表示任意数据类型
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

// 不给初始值的情况下，a的数据类型默认为any
let a
a = 1
a = '1'

// b的类型为number，因为ts会根据值来进行推断类型
let b = 1


// 接口
interface Obj {
  num: string
  toString: () => void
}
// 也可以使用type
type Obj1 = {
  num: string
  toString: () => void
}

let obj: Obj = {
  num: '123',
  toString: function() {
    console.log(this.num)
  }
}
obj.toString()

// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
  console.log("This is my warning message");
}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable: void = undefined

// null & undefined
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。然而，当你指定了--strictNullChecks标记(配置文件)，null和undefined只能赋值给void和它们各自。 这能避免很多常见的问题
let u: undefined = undefined
let n: null = null

// 联合类型
let num: number | undefined | null = undefined
let bol: boolean | undefined | null = null

// 联合类型的共有属性不会报错，但是私有属性会报错
function test(a: string | number) {
  return a.toString() // 不会报错，因为number和string都可以调用toString方法
  // return a.split() // 报错，因为只有string才有split方法
}

// never类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail(): never {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型

// 使用object类型，就可以更好的表示像Object.create这样的API。例如：
// 相当于定义一个函数的参数类型及返回值类型，尤其适合在引入第三方库时，第三方库没做ts适配时使用
declare function create(o: object | null): void

create({ prop: 0 }) // OK
create(null) // OK
create([]) // OK
create({}) // OK
create(function () {}) // OK

// create(42) // Error
// create("string") // Error
// create(false) // Error
// create(undefined) // Error

// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
// Declare a tuple type
let y: [string, number];
// Initialize it
y = ['hello', 10]; // OK
// Initialize it incorrectly
// y = [10, 'hello']; // Error
console.log(y[0].substr(1)); // OK
// console.log(y[1].substr(1)); // Error, 'number' does not have 'substr'
// 当访问一个越界的元素
y.push('world'); // OK, 字符串可以赋值给(string | number)类型
// y.push(null); // error, 越界push的元素只能是（string | number）类型
// ?代表可选类型
let z: [string, number, boolean?]
z = ['123', 123, false]
z = ['123', 123]

declare function  test2(arg1: number, arg2: string, arg3: boolean): void;
// 可以缩写为：
declare function  test3(...args: [number, string, boolean]): void;

let arr0: [number, ...string[]] = [1, '2', '3', '4']
let arr: [string, ...number[]] = ['1', 2, 3, 4]