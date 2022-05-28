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

let list1: number[] = [1, 2, 3, 4]   // 没有长度限制
list1.push(1) // 可以
// list1.push('2') // 报错

let list2: Array<number> = [1, 2, 3, 4]
list2.push(1) // 可以
// list2.push('2') // 报错

interface List {
  [index: number]: number | string
  push: Function // 如果不写的话，调用push方法会报错
}

let list3: List = [1, 2, 3, 4, '5']
list3.push(1) // 可以
list3.push('1') // 可以

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
// let res4 = func() // 报错，参数少了
// let res5 = func(1, 2, 3, 4) // 报错，参数多了

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
// let res9 = func5({a: 2}) // 报错

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