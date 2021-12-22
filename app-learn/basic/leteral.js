//줄바꿈 형식
// \n을 활용한 줄바꿈
"엔\n터"    // 엔
            // 터

//``을 활용한 줄바꿈
`엔         //엔
터`         //터

let name = "김건희";

let str = "제 이름은 " + name;
console.log(str)        // 제 이름은 김건희
//``을 활용한 변수값 더하기
let str2 = `제 이름은 ${name}`;
console.log(str2)       // 제 이름은 김건희