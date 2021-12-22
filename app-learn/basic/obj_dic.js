//기존 딕셔너리 구성 방식
var name = "스파르타";
var job = "developer";

var user = {
    name: name,
    job: job
}

console.log(user);  // {name: "스파르타", job: "developer"}

//다른 딕셔너리 구성 방식
//키와 변수이름이 똑같고 키에 변수를 할당하는 구조라면

var name = "스파르타";
var job = "developer";

var user = {name, job}

console.log(user)    // {name: "스파르타", job: "developer"}