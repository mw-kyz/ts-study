// // 全局库引用的声明方式

// // 需在配置文件中定义这两项,ts才知道去哪找全局的声明文件
// // "include": [
// //   "./**/*"  // 默认值为 “src/**/*”
// // ],
// // "exclude": [
// //   "node_modules",
// //   "**/*.spec.ts"
// // ]

// console.log(jQuery('#box'));
// // foo = 1
// // // foo = '1' // 报错，类型不匹配
// // console.log(foo1)
// // // foo1 = 2 // 报错，const定义的变量不能修改
// // foo2 = 2
// // // foo2 = '2' // 报错，类型不匹配

// // function greet(a: string) {

// // }

// // greet('123')

// // myLib.makeGreeting('123')
// // myLib.numberOfGreetings
// // myLib.fn.test('123')
// // myLib.fn.test1

// function getWidget(arg: number | string): number | string[] {
//   if (typeof arg === 'number') {
//     return 1
//   } else {
//     return ['1']
//   }
// }

// let x1: number = getWidget(43)
// console.log(x1)

// let arr1: string[] = getWidget("all of them")
// console.log(arr1)

// greet1({
//   greeting: "hello world",
//   duration: 4000
// });

// let GreetingSettings1: GreetingSettings = {
//   greeting: '123'
// }

// greet2(() => '1')

// function getGreeting() {
//   return "howdy"
// }
// class MyGreeter1 extends Greeter { }

// greet2("hello")
// greet2(getGreeting)
// greet2(new MyGreeter1(''))

// const myGreeter = new Greeter2("hello, world");
// myGreeter.greeting = "howdy";
// myGreeter.showGreeting();

// class SpecialGreeter extends Greeter {
//   constructor() {
//     super("Very special greetings");
//   }
// }