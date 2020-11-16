import React from 'react';
enum Color {red, green, black}
let color: string = Color[2]
console.log(color, '>>>>>enum')
// 接口示例
interface params {
  color?: string;
  size: number;
  [name: string]: any
}
let params = {size: 122, extra: 1111}
function interFaceCase (params: params) : params {
  console.log(params,'>>>>>>>>>>color')
  return params
}
interFaceCase(params)

// 函数类型接口定义
interface funCase {
  (attr: string, attr2: Array<string | number>): boolean
}
let funCase : funCase
funCase = function (name, list) {
  console.log(name, list)
  return list.length > 0
}

// 可索引对象
interface indexCase {
  [index: number]: number;
  [name: string]: any
}
let indexCase: indexCase = {a: 1, 1: 1}
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

// 函数 - 默认值
function func (a : string = 'test') : string {
  return a
}

// 函数 - rest
(function rest (a) {
  console.log(a, '>>>>>>>rest')
})({a: 222})

// 泛型
interface GenericIdentityFn {
  <T>(arg: T): T
}

let myIdentity: GenericIdentityFn = function (arg : any) {
  return arg
}
myIdentity(1)

// 泛型约束
interface Length {
  length: Number;
}
function lengthDemo <T extends Length> (arg: T) {
  return arg.length > 1
}
console.log(lengthDemo([1,2,3]), '>>>>>>>')

// 函数重载
export default function TypeScript () {
  return (<div>this is typeScript</div>)
}