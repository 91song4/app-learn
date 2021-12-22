//배열에서 특정 원소 갯수 구하기 - map 를 함수를 사용해서 해결하기
//다음에서 '딸기'는 몇 개일까? - 이번엔 자바스크립트 콘솔창에서!
let fruit_list = ['사과','감','감','배','포도','포도','딸기',
'포도','감','수박','딸기']

let count = 0;
for (let i = 0; i < fruit_list.length; i++) {
	let fruit = fruit_list[i];
	if (fruit == '딸기') {
		count += 1;
	}
}
console.log(count);

let fruit_list = ['사과','감','감','배','포도','포도','딸기',
'포도','감','수박','딸기']
let count = 0;
fruit_list.map((s)=>{
	if(s == '딸기') count += 1;
})
console.log(count)