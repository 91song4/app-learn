let a = 100
a % 8   // a를 8로 나눈 나머지
a % 3   // a를 3로 나눈 나머지
a < 150 // true
a > 200 // false
a == 100// true
a != 100// false

let myemail = 'sparta@naver.com'
myemail.split('@')      // ["sparta", "naver.com"]
myemail.split('@')[0]   // "sparta"
myemail.split('@')[1]   // "naver.com"
myemail.split('@')[1].split('.')    // ["naver", "com"]
myemail.split('@')[1].split('.')[0] // "naver"
myemail.split('@')[1].split('.')[0] // "com"