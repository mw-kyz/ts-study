### `TypeScript` 学习笔记

#### 1. `typescript`安装

```sh
# 全局安装
npm install -g typescript

# 查看ts版本
tsc -v

# 查看ts命令
tsc -h
```



#### 2. ts的配置文件

```sh
# 自动生成ts的配置文件 tsconfig.json
tsc --init
```

```json
// tsconfig.json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                         /* Enable incremental compilation */
    "target": "es5",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                                   /* Specify library files to be included in the compilation. */
    // "allowJs": true,                             /* Allow javascript files to be compiled. */
    // "checkJs": true,                             /* Report errors in .js files. */
    // "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */
    // "declaration": true,                         /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                           /* Generates corresponding '.map' file. */
    // "outFile": "./",                             /* Concatenate and emit output to single file. */
    // "outDir": "./",                              /* Redirect output structure to the directory. */
    // "rootDir": "./",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                           /* Enable project compilation */
    // "tsBuildInfoFile": "./",                     /* Specify file to store incremental compilation information */
    // "removeComments": true,                      /* Do not emit comments to output. */
    // "noEmit": true,                              /* Do not emit outputs. */
    // "importHelpers": true,                       /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,                  /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,                     /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                                 /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                       /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                    /* Enable strict null checks. */
    // "strictFunctionTypes": true,                 /* Enable strict checking of function types. */
    // "strictBindCallApply": true,                 /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,        /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                      /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                        /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                      /* Report errors on unused locals. */
    // "noUnusedParameters": true,                  /* Report errors on unused parameters. */
    // "noImplicitReturns": true,                   /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,          /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,            /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                  /* Ensure overriding members in derived classes are marked with an 'override' modifier. */
    // "noPropertyAccessFromIndexSignature": true,  /* Require undeclared properties from index signatures to use element accesses. */

    /* Module Resolution Options */
    // "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                             /* Base directory to resolve non-absolute module names. */
    // "paths": {},                                 /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                              /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                             /* List of folders to include type definitions from. */
    // "types": [],                                 /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,                    /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,                /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                            /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                               /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                     /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                       /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
  }
}
```





#### 3. 数据类型

+ js中的数据类型
  + 原始数据类型： boolean、string、number、null、undefined、symbol
  + 引用数据类型：object
+ ts中的数据类型
  + 基础类型： boolean、string、number、null、undefined、symbol、any、never
  + 对象：object、interface
  + 数组：number[]、string[]、boolean[]
  + 函数：function test(a: number, b: number): number {  return a + b }
  + 泛型：Array<number>



#### 4. 类型注解

##### 基础类型注解

```typescript
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


// 接口（重复声明多个，则不同属性会合并，相同属性，但是类型不同会报错）
interface Obj {
  num: string
  toString: () => void
}
interface Obj {
  num: number， // 相同属性，类型不同，报错
  age: number, // 不同属性，合并
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
```

编译成js后如下：

```javascript
"use strict";
// boolean
var isShow = false;
// number
var decLiteral = 6; // 十进制
var hexLiteral = 0xf00d; // 16进制
var binaryLiteral = 10; // 二进制
var octalLiteral = 484; // 八进制
// string
var str = 'Join';
var str1 = "Hello, my name is " + str;
// any: 表示任意数据类型
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
// 不给初始值的情况下，a的数据类型默认为any
var a;
a = 1;
a = '1';
// b的类型为number，因为ts会根据值来进行推断类型
var b = 1;
var obj = {
    num: '123',
    toString: function () {
        console.log(this.num);
    }
};
obj.toString();
// void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser() {
    console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
var unusable = undefined;
// null & undefined
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。然而，当你指定了--strictNullChecks标记(配置文件)，null和undefined只能赋值给void和它们各自。 这能避免很多常见的问题
var u = undefined;
var n = null;
// 联合类型
var num = undefined;
var bol = null;
// 联合类型的共有属性不会报错，但是私有属性会报错
function test(a) {
    return a.toString(); // 不会报错，因为number和string都可以调用toString方法
    // return a.split() // 报错，因为只有string才有split方法
}
// never类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
```

##### 对象

```typescript
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
```

​	编译成js后如下：

```javascript
create({ prop: 0 }); // OK
create(null); // OK
create([]); // OK
create({}); // OK
create(function () { }); // OK
// create(42) // Error
// create("string") // Error
// create(false) // Error
// create(undefined) // Error
```

##### interface

+ 对象的形状进行描述
+ 对类的一部分行为的抽象

```typescript
interface Person {
  readonly id: number // 只读，不能修改
  name: string // 必须存在此属性
  age?: number // 可选属性，可有可无
  [propName: string]: any // 代表任意未被声明的属性，可以是多个
}

let person: Person = {
  id: 1,
  name: 'zhangsan',
  age: 18,
  sex: 'male',
  car: 'maz',
  wife: 14
}
```

编译成js后如下：

```js
"use strict";
var person = {
    id: 1,
    name: 'zhangsan',
    age: 18,
    sex: 'male',
    car: 'maz',
    wife: 14
};
```

##### 数组

写法：

+ 类型[]:  number[]  
+ Array<类型>：Array<number>
+ interface方式
+ 类数组的写法

```typescript
let list1: number[] = [1, 2, 3, 4]   // 没有长度限制
list1.push(1) // 可以
list1.push('2') // 报错

let list2: Array<number> = [1, 2, 3, 4]
list2.push(1) // 可以
list2.push('2') // 报错

interface List {
  [index: number]: number | string
  push: Function // 如果不写的话，调用push方法会报错
}

let list3: List = [1, 2, 3, 4, '5']
list3.push(1) // 可以
list3.push('1') // 可以

// 类数组
interface Args {
  [index: number]: any
  length: number
  callee: Function
}
function test1() {
  // IArguments为内置类型
  let args: IArguments = arguments
  // 也可以使用自定义的接口
  let args1: IArguments = arguments
}

test1()
```

编译成js后如下：

```javascript
var list1 = [1, 2, 3, 4]; // 没有长度限制
list1.push(1); // 可以
list1.push('2'); // 报错
var list2 = [1, 2, 3, 4];
list2.push(1); // 可以
list2.push('2'); // 报错
var list3 = [1, 2, 3, 4, '5'];
list3.push(1); // 可以
list3.push('1'); // 可以
function test1() {
    // IArguments为内置类型
    var args = arguments;
    // 也可以使用自定义的接口
    var args1 = arguments;
}
test1();
```

##### 函数

```typescript
// 函数字面量
function func(a: number, b = 2, c?: number): number {
  return a + b + Number(c)
}
// 函数表达式
// 此处的注解不是箭头函数，而是定义函数返回值的类型
const func1: (a: number, b:number) => number = function(a, b) {
  return a + b
}
// 写法1
const func2: (a: number, b:number) => object = function(a, b) {
  return {
    a,
    b
  }
}
// 写法2
const func3: (a: number, b:number) => {} = function(a, b) {
  return {
    a,
    b
  }
}
let res1 = func(1) // 可以
let res2 = func(1, 2) // 可以
let res3 = func(1, 2, 3) // 可以
let res4 = func() // 报错，参数少了
let res5 = func(1, 2, 3, 4) // 报错，参数多了

// 剩余参数可使用三点运算符收集
function func4(a: number, b?: number, ...args: number[]): number {
  return a
}
let res6 = func4(1, 2, 3, 4, 5, 6, 7) // 可以

// 解构赋值
function func5({ a, b }: { a: number, b: number } = { a: 1, b: 2 }): number {
  return a + b
}
function func6({ a = 1 }: { a: number }): number {
  return a
}
let res7 = func5({a: 2, b: 3}) // 可以
let res8 = func5() // 可以
let res9 = func5({a: 2}) // 报错

interface Card {
  suit: string
  card: number
}
interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck, a: number): () => Card
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // 手动指定this指向
  createCardPicker: function(this: Deck, a) {
    console.log(a)
      return () => {
          let pickedCard = Math.floor(Math.random() * 52)
          let pickedSuit = Math.floor(pickedCard / 13)

          return {suit: this.suits[pickedSuit], card: pickedCard % 13}
      }
  }
}

let cardPicker = deck.createCardPicker(1)
let pickedCard = cardPicker()

alert("card: " + pickedCard.card + " of " + pickedCard.suit)
// 函数重载:为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。
function reverse(x: string): string
function reverse(x: number): number
function reverse(x: string | number): any {
  if (typeof x === 'string') {
    return 'string'
  }

  if (typeof x === 'number') {
    return 1
  }
}
console.log(reverse('string'))
console.log(reverse(1))
```

编译成js后如下：

```javascript
// 函数字面量
function func(a, b, c) {
    if (b === void 0) { b = 2; }
    return a + b + Number(c);
}
// 函数表达式
// 此处的注解不是箭头函数，而是定义函数返回值的类型
var func1 = function (a, b) {
    return a + b;
};
// 写法1
var func2 = function (a, b) {
    return {
        a: a,
        b: b
    };
};
// 写法2
var func3 = function (a, b) {
    return {
        a: a,
        b: b
    };
};
var res1 = func(1); // 可以
var res2 = func(1, 2); // 可以
var res3 = func(1, 2, 3); // 可以
var res4 = func(); // 报错，参数少了
var res5 = func(1, 2, 3, 4); // 报错，参数多了
// 剩余参数可使用三点运算符收集
function func4(a, b) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return a;
}
var res6 = func4(1, 2, 3, 4, 5, 6, 7); // 可以
// 解构赋值
function func5(_a) {
    var _b = _a === void 0 ? { a: 1, b: 2 } : _a, a = _b.a, b = _b.b;
    return a + b;
}
function func6(_a) {
    var _b = _a.a, a = _b === void 0 ? 1 : _b;
    return a;
}
var res7 = func5({ a: 2, b: 3 }); // 可以
var res8 = func5(); // 可以
var res9 = func5({ a: 2 }); // 报错
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // 手动指定this指向
    createCardPicker: function (a) {
        var _this = this;
        console.log(a);
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker(1);
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
function reverse(x) {
    if (typeof x === 'string') {
        return 'string';
    }
    if (typeof x === 'number') {
        return 1;
    }
}
console.log(reverse('string'));
console.log(reverse(1));
```

##### 类

一：

```typescript
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
```

编译成js后如下：

```javascript
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类的注解
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
// 继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
// 复杂的继承
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal1));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal1));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
```

二：

```typescript
// 封装：（三种修饰符：public、protected、private）
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
```

编译成js后如下：

```javascript
// 封装：
// public: 自身调用、子类可以调用、实例调用
// protected：自身调用、子类可以调用
// private：自身调用
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        // 自身调用
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
// 子类可以调用（继承）
var Snake1 = /** @class */ (function (_super) {
    __extends(Snake1, _super);
    function Snake1(name) {
        return _super.call(this, name) || this;
    }
    Snake1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake1;
}(Animal2));
var Jake = new Animal2('Jake');
// 实例调用
Jake.move();
// readonly修饰符，不能修饰方法（constructor也属于方法）
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    Animal3.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        // 自身调用
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal3;
}());
// 以上可以通过参数属性简写为：
var Animal4 = /** @class */ (function () {
    function Animal4(name) {
        this.name = name;
    }
    Animal4.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        // 自身调用
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal4;
}());
// 普通的类
var Employee = /** @class */ (function () {
    function Employee() {
        this.fullName = '';
    }
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
var passcode = "secret passcode";
// 用存取器改造以上类
var Employee1 = /** @class */ (function () {
    function Employee1() {
        this._fullName = '';
    }
    Object.defineProperty(Employee1.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee1;
}());
var employee1 = new Employee1();
employee1.fullName = "Bob Smith";
if (employee1.fullName) {
    alert(employee1.fullName);
}
```

三：

```typescript
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
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在

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
```

编译成js后如下：

```javascript
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法, 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
var Greeter1 = /** @class */ (function () {
    function Greeter1() {
    }
    Greeter1.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    };
    Greeter1.standardGreeting = "Hello, there";
    return Greeter1;
}());
// 此处类型是 Greeter1 类的实例对象
var greeter1;
greeter1 = new Greeter1();
console.log(greeter1.greet());
// 此处的类型是 Greeter1 这个构造函数
var greeterMaker = Greeter1;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
// 把类当做接口使用
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
```

##### 接口

一：

```typescript
// 对对象的形状进行描述
// 对类的一部分行为的抽象

interface Person1 {
  readonly id: number // 只读，不能修改
  name: string // 必须存在此属性
  age?: number // 可选属性，可有可无
  [propName: string]: any // 代表任意未被声明的属性，可以是多个
}

let person1: Person1 = {
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
  [x: number]: Animal5;
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
  name: string       // 错误，因为[index: string]: number相当于大条件，需符合这个大条件
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
myArray[2] = "Mallory"; // error!，因为是只读的
```

编译成js后：

```javascript
"use strict";
// 对对象的形状进行描述
// 对类的一部分行为的抽象
var person1 = {
    id: 1,
    name: 'zhangsan',
    age: 18,
    sex: 'male',
    car: 'maz',
    wife: 14
};
// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
var c = [1, 2, 3, 4];
var ro = c;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// 函数注解的普通方式
function mySearch1(source, subString) {
    var result = source.search(subString);
    return result > -1;
}
// 函数注解的表达式方式
var mySearch2 = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var mySearch3 = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// 可索引的类型
// 共支持两种索引签名，number和string，其中number索引最终也会转换成字符串
// 数字索引的返回值必须是字符串索引返回值类型的子类型,这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
var Animal5 = /** @class */ (function () {
    function Animal5() {
    }
    return Animal5;
}());
var Dog5 = /** @class */ (function (_super) {
    __extends(Dog5, _super);
    function Dog5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog5;
}(Animal5));
var myArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!，因为是只读的
```

二：

```typescript
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
class Image implements SelectableControl {
  select() { }
}
```

编译成js后：

```javascript
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
// 可以同时继承父类及接口，接口也可以同时继承多个
var Clock = /** @class */ (function (_super) {
    __extends(Clock, _super);
    function Clock(h, m) {
        return _super.call(this) || this;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}(Door));
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    DigitalClock.getTime = function () { };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    AnalogClock.getTime = function () { };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
// 断言
var square = {};
// 断言也可以这么写
var square1 = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 
// 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// 错误：“Image”类型缺少“state”属性。
var Image = /** @class */ (function () {
    function Image() {
    }
    Image.prototype.select = function () { };
    return Image;
}());
```

##### 泛型

```typescript
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
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// 在泛型中使用类类型
// new代表是构造函数
function create<T>(c: {new(): T; }): T {
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
```

编译成js后：

```javascript
"use strict";
//  T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型
// 这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 
function identity(arg) {
    return arg;
}
identity(123); // 可以
identity('123'); // 可以
var e = identity;
// 泛型写法一：函数泛型
var e1 = identity;
// T只是一个变量名，你可以随意命名，但是不建议
var e2 = identity;
// 泛型写法二：对象字面量的方式
var e3 = identity;
var myIdentity = identity;
var myIdentity1 = identity;
// 以下是ts定义的Array接口，就使用到了泛型
// interface Array<T>{
//   ...省略
//   [n: number]: T
// }
// 泛型写法
var d = [1, 2, 3, 4];
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
// 泛型约束
// 此处是通过Array来保证arg有length属性
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
loggingIdentity(['1', '2', '3']);
// 当arg不是数组时，就可以使用泛型约束来保证变量arg具有length属性
function loggingIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
// 这样写也可以
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// 在泛型中使用类类型
// new代表是构造函数
function create(c) {
    return new c();
}
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animall = /** @class */ (function () {
    function Animall() {
    }
    return Animall;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animall));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animall));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
```

##### 元组

```typescript
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
// Declare a tuple type
let y: [string, number];
// Initialize it
y = ['hello', 10]; // OK
// Initialize it incorrectly
y = [10, 'hello']; // Error
console.log(y[0].substr(1)); // OK
console.log(y[1].substr(1)); // Error, 'number' does not have 'substr'
// 当访问一个越界的元素
y.push('world'); // OK, 字符串可以赋值给(string | number)类型
y.push(null); // error, 越界push的元素只能是（string | number）类型
// ?代表可选类型
let z: [string, number, boolean?]
z = ['123', 123, false]
z = ['123', 123]

declare function  test2(arg1: number, arg2: string, arg3: boolean): void;
// 可以缩写为：
declare function  test3(...args: [number, string, boolean]): void;

let arr0: [number, ...string[]] = [1, '2', '3', '4']
let arr: [string, ...number[]] = ['1', 2, 3, 4]
```

编译成js后：

```javascript
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
// Declare a tuple type
var y;
// Initialize it
y = ['hello', 10]; // OK
// Initialize it incorrectly
y = [10, 'hello']; // Error
console.log(y[0].substr(1)); // OK
console.log(y[1].substr(1)); // Error, 'number' does not have 'substr'
// 当访问一个越界的元素
y.push('world'); // OK, 字符串可以赋值给(string | number)类型
y.push(null); // error, 越界push的元素只能是（string | number）类型
// ?代表可选类型
var z;
z = ['123', 123, false];
z = ['123', 123];
var arr0 = [1, '2', '3', '4'];
var arr = ['1', 2, 3, 4];
```

##### 高级类型

```typescript
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
```

编译成js后：

```javascript
"use strict";
// 交叉类型
// 交叉类型是将多个类型合并为一个类型。
// 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。 例如， Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。 就是说这个类型的对象同时拥有了这三种类型的成员
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // ...
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n1 = jim.name;
jim.log();
var Test = /** @class */ (function () {
    function Test(arg) {
        this.arg = arg;
        this.props = arg;
    }
    Test.prototype.info = function () {
        return {
            url: this.props.url,
            content: this.props.content,
            title: this.props.url
        };
    };
    return Test;
}());
```

##### 枚举

```typescript
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
```

编译成js后：

```javascript
// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Left"] = 1] = "Left";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0  默认为0
console.log(Direction.Left); // 1 依次递增
console.log(Direction.Right); // 2 依次递增
console.log(Direction.Down); // 3 依次递增
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
    Direction1[Direction1["Down"] = 4] = "Down";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 1  初始值为1
console.log(Direction1.Left); // 2 从1依次递增
console.log(Direction1.Right); // 3 依次递增
console.log(Direction1.Down); // 4 依次递增
var Response1;
(function (Response1) {
    Response1[Response1["No"] = 0] = "No";
    Response1[Response1["Yes"] = 1] = "Yes";
})(Response1 || (Response1 = {}));
// 枚举既可以当做值，也可以当做类型
function respond(recipient, message) {
    // ...
}
respond("Princess Caroline", Response1.Yes);
function getSomeValue() {
    return 2;
}
// 枚举值也可以是表达式，但是需放在最后
// 正确
var E;
(function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = getSomeValue()] = "B"; // 2
})(E || (E = {}));
// 错误
var E1;
(function (E1) {
    E1[E1["A"] = getSomeValue()] = "A";
    // B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
})(E1 || (E1 = {}));
// 这也是可以的
var E2;
(function (E2) {
    E2[E2["A"] = 3] = "A";
    E2[E2["B"] = 4] = "B";
    E2[E2["C"] = 3] = "C";
    E2[E2["D"] = 4] = "D"; // 4
})(E2 || (E2 = {}));
// 字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
    Direction2["Down"] = "DOWN";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up); // UP
console.log(Direction2.Left); // LEFT
console.log(Direction2.Right); // RIGHT
console.log(Direction2.Down); // DOWN
console.log(Direction2);
// 异构枚举
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No1"] = 1] = "No1";
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No2"] = 2] = "No2";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
console.log(BooleanLikeHeterogeneousEnum);
// 枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：
// 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
// 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
// 带括号的常量枚举表达式
// 一元运算符 +, -, ~其中之一应用在了常量枚举表达式
// 常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
// 所有其它情况的枚举成员被当作是需要计算得出的值。
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["X"] = 7] = "X";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G"; // 3
})(FileAccess || (FileAccess = {}));
// 联合枚举与枚举成员的类型
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var ci = {
    // kind: ShapeKind.Square, //    ~~~~~~~~~~~~~~~~ Error!
    kind: ShapeKind.Circle,
    radius: 100,
};
var E3;
(function (E3) {
    E3[E3["Foo"] = 0] = "Foo";
    E3[E3["Bar"] = 1] = "Bar";
})(E3 || (E3 = {}));
function f(x) {
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
var E4;
(function (E4) {
    E4[E4["X"] = 0] = "X";
    E4[E4["Y"] = 1] = "Y";
    E4[E4["Z"] = 2] = "Z";
})(E4 || (E4 = {}));
function fun(obj) {
    return obj.X;
}
// Works, since 'E' has a property named 'X' which is a number.
fun(E4);
// 反向映射(只有数字枚举会，字符串枚举不会，异构枚举中的数字枚举也会)
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var aa = Enum.A;
var nameOfA = Enum[aa]; // "A"
console.log(Enum); // { A: 0, 0: 'A' }
// console.log(Directions) // 报错，"const" 枚举仅可在属性、索引访问表达式、导入声明的右侧、导出分配或类型查询中使用
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
console.log(directions); // [0, 1, 2, 3]
console.log(0 /* Up */); // 0
console.log(1 /* Down */); // 1
console.log(2 /* Left */); // 2
console.log(3 /* Right */); // 3
```



#### 5. 类型推断

TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型（在赋值时确认类型）。如下面的例子

```ts
let x = 3;
```

变量`x`的类型被推断为数字。 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。

##### 最佳通用类型

当需要从几个表达式中推断类型时候，会使用这些表达式的类型来推断出一个最合适的通用类型。例如，

```ts
let x = [0, 1, null];
```

为了推断`x`的类型，我们必须考虑所有元素的类型。 这里有两种选择： `number`和`null`。 计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型。

由于最终的通用类型取自候选类型，有些时候候选类型共享相同的通用类型，但是却没有一个类型能做为所有候选类型的类型。例如：

```ts
let zoo = [new Rhino(), new Elephant(), new Snake()];
```

这里，我们想让zoo被推断为`Animal[]`类型，但是这个数组里没有对象是`Animal`类型的，因此不能推断出这个结果。 为了更正，当候选类型不能使用的时候我们需要明确的指出类型：

```ts
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
```

如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型，`(Rhino | Elephant | Snake)[]`。

##### 上下文类型

TypeScript类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”。按上下文归类会发生在表达式的类型与所处的位置相关时。比如：

```ts
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};
```

这个例子会得到一个类型错误，TypeScript类型检查器使用`Window.onmousedown`函数的类型来推断右边函数表达式的类型。 因此，就能推断出 `mouseEvent`参数的类型了。 如果函数表达式不是在上下文类型的位置， `mouseEvent`参数的类型需要指定为`any`，这样也不会报错了。

如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略。 重写上面的例子：

```ts
window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.button);  //<- Now, no error is given
};
```

这个函数表达式有明确的参数类型注解，上下文类型被忽略。 这样的话就不报错了，因为这里不会使用到上下文类型。

上下文归类会在很多情况下使用到。 通常包含函数的参数，赋值表达式的右边，类型断言，对象成员和数组字面量和返回值语句。 上下文类型也会做为最佳通用类型的候选类型。比如：

```ts
function createZoo(): Animal[] {
    return [new Rhino(), new Elephant(), new Snake()];
}
```

这个例子里，最佳通用类型有4个候选者：`Animal`，`Rhino`，`Elephant`和`Snake`。 当然， `Animal`会被做为最佳通用类型。

