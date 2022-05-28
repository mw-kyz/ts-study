// 模块化的声明方式

// 需在配置文件中定义这两项,ts才知道去types目录下找对应的声明文件
// 除此之外，假如定义的是jquery的声明文件，就要在types目录下新建jquery文件夹，并在此文件夹下定义index.d.ts
// "baseUrl": "./",                             /* Base directory to resolve non-absolute module names. */
// "paths": {
//   "*": ["types/*"]
// }, 


declare let jQuery: (param: string) => void

// 全局变量
declare var foo: number
declare const foo1: number = 4
declare  let foo2: number

// 全局函数
declare function greet(greeting: string): void

// 带属性的对象（命名空间）
declare namespace myLib {
  function makeGreeting(s: string): string
  let numberOfGreetings: number
  namespace fn {
    function test(s: string): void
    let test1: string
  }
}

// 函数重载
declare function getWidget(n: number): number
declare function getWidget(s: string): string[]

//可重用类型（接口）
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

declare function greet1(setting: GreetingSettings): void;

// 可重用类型（类型别名）
type GreetingLike = string | (() => string) | MyGreeter1;

declare function greet2(g: GreetingLike): void;

declare class Greeter2 {
  constructor(greeting: string);

  greeting: string;
  showGreeting(): void;
}

export {
  jQuery,
  foo,
  myLib,
  greet1,
  greet2,
  getWidget,
  Greeter2,
  GreetingSettings
}