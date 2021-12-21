//기존 함수로직
let a = function(){
    console.log("함수")
}

//arrow 함수로직
let a = () => {

}

//객체
let blog = {
    owner: "noah",  //큰 따움표가 없어도 키역할을 할 수 있음
    "url": "noahlogs.tistory.com",
    getPost() {     //함수도 딕셔너리에 포함 될 수 있음
        console.log("ES6 문법 정리");
    }
};

//기존 할당 방식
let owner = blog.owner //객체 blog에 키 owner에 접근하여 밸류값을 변수 owner에 담는다. 
let getPost = blog.getPost

//비구조 할당 방식
let { owner, getPost} = blog
console.log(owner)      // noah
console.log(getPost)    // getPost() { console.log("ES6 문법 정리"); }
console.log(getPost())  // ES6 문법 정리
console.log(owner2)     // X -> 객체에 owner2라는 키 값이 없음

//함수에서 비구조 할당 방식으로 전달된 딕셔너리 값 꺼내기
let blogFunction = ({owner,url,getPost}) => {
    console.log(owner)
    console.log(url)
    console.log(getPost())
}

blogFunction(blog)