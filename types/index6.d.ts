// // 全局库引用的声明方式
// // 需在配置文件中定义这两项,ts才知道去哪找全局的声明文件
// // "include": [
// //   "./**/*"  // 默认值为 “src/**/*”
// // ],
// // "exclude": [
// //   "node_modules",
// //   "**/*.spec.ts"
// // ]

// declare let jQuery: (param: string) => void

// // 全局变量
// declare var foo: number
// declare const foo1: number = 4
// declare  let foo2: number

// // 全局函数
// declare function greet(greeting: string): void

// // 带属性的对象（命名空间）
// declare namespace myLib {
//   function makeGreeting(s: string): string
//   let numberOfGreetings: number
//   namespace fn {
//     function test(s: string): void
//     let test1: string
//   }
// }

// // 函数重载
// declare function getWidget(n: number): number
// declare function getWidget(s: string): string[]

// //可重用类型（接口）
// interface GreetingSettings {
//   greeting: string;
//   duration?: number;
//   color?: string;
// }

// declare function greet1(setting: GreetingSettings): void;

// // 可重用类型（类型别名）
// type GreetingLike = string | (() => string) | MyGreeter1;

// declare function greet2(g: GreetingLike): void;

// declare class Greeter2 {
//   constructor(greeting: string);

//   greeting: string;
//   showGreeting(): void;
// }