let num = 20        // 변수 num 선언, num에 20을 기록
console.log(num)    // 변수 num 출력 =>20

num = 100           // num에 100을 기록
console.log(num)    // 변수 num 출력 => 100

//단축키 ctrl+L       clear console

let a = 1
let b = 2
let c = a + b
console.log(c)      // 변수끼리의 합 가능 => 3
console.log(a * b)  // 변수끼리의 곱 가능 => 2

let first = 'gunhee'//'', "" 안에 들어가는 말은 문자
let last = "kim"

console.log(first + last) // 문자 더하기 가능 => gunheekim
console.log(first + " " + last) // 공백도 문자 => gunhee kim

let firstName // camel case
let first_name // snake case
let FirstName // pascal case

//변수 선언 방식 var, let, const

//var 의 특징
var name = 'bathingape'
console.log(name) // bathingape

var name = 'javascript'
console.log(name) // javascript

//변수를 한 번 더 선언했음에도 불구하고,
//  에러가 나오지 않고 각기 다른 값이 출력되는 것을 볼 수 있다.

// 이는 유연한 변수 선언으로 간단한 테스트에는 편리 할 수 있겠으나,
//  코드량이 많아 진다면 어디에서 어떻게 사용 될지도 파악하기 힘들뿐더러
//   값이 바뀔 우려가 있다.

// let 의 특징
let name = 'bathingape'
    console.log(name) // bathingape

    let name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) //react

// name이 이미 선언 되었다는 에러 메세지가 나온다. (const도 마찬가지)
// 변수 재선언이 되지 않는다.
// 변수 재할당은 가능.

//const 의 특징
const name = 'bathingape'
    console.log(name) // bathingape

    const name = 'javascript'
    console.log(name) 
    // Uncaught SyntaxError: Identifier 'name' has already been declared

    name = 'react'
    console.log(name) 
    //Uncaught TypeError: Assignment to constant variable.

    //const 는 변수 재선언, 재할당 모두 불가능하다.