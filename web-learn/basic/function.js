//Ex_1
function sum(num1, num2){
    return num1+num2
}
let result = sum(2,3)
result                  // 5

//Ex_2
function mysum(num1, num2){
    alert('Hello!')
    return num1+num2
}
let result2 = mysum(2,3)
result2                 // alert창 "Hello!" 그 후 result2의 값은 5가 된다
result2                 // 5

//Ex_3
function mysum2(num1, num2){
    alert('Hello!')
}
mysum2(1,2)             // alert창 "Hello!"

//Ex_4
function mysum3(num1, num2){
    alert('frist'+ " "+num1)
    alert('second'+ " " +num2)
}
mysum3(2,3)             // alert창 "frist 2"
                        // alert창 "second 3"

//Ex_5
function mysum4(){
    alert('Hello!')
    alert('again Hello!')
}                        
mysum4()                  // alert창 "Hello!"
                        // alert창 "again Hello!"