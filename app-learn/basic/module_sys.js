//times, plusTwo 함수를 외부로 내보낼 준비를 합니다.
export function times(x) {
    return x * x;
  }
  export function plusTwo(number) {
    return number + 2;
  }

  import { times, plusTwo } from './util.js';
console.log(times(2));
console.log(plusTwo(3));

// in util.js
export default function times(x) {
    return x * x;
  }
  // in app.js
  import k from './util.js';
  console.log(k(4)); // returns 16