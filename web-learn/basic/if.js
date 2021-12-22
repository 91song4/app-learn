let age = 24

if (age > 20){
    console.log('성인 입니다')
}else{
    console.log('청소년 입니다')
}
// 성인 입니다

let sex = 'man'
if (age > 20 && sex == 'man'){
    console.log('성인 남성 입니다')
}else{
    console.log('청소년 입니다')
}
// 성인 남성 입니다

if (age > 20){
    console.log('성인 입니다')
}else if(age > 10){
    console.log('청소년 입니다')
}else{
    console.log('아동 입니다')
}
//성인 입니다