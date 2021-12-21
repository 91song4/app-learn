//기본적인 반복문 형태
let numbers = [1,2,3,4,5,6,7];
for(let i=0; i<numbers.length; i++){
	console.log(numbers[i]);
}

//map을 사용한 반복문 형태
let num_list = [1,2,3,4,5,6,7]

num_list.map((value, i) =>{
    console.log(value, i)
})