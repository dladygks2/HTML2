// 변수선언 : let 을 사용

// 'use strict'
// use strict 는 엄격 mode이다. 
// 입력모드 ECMA6 로 쓰겠다. ( 즉, 옛날 방식)
// 저 키워드는 최상단에 선언되어야 엄격모드가 적용된다.

let message = 'test';

let user = 'John', age = 25, message2 = 'Hello';
// let age = 25;
// let message = 'Hello';

console.log(message2);

// 변수 명명 규칙
// 1. 변수명은 오직 문자와 숫자, 기호 $, _ 만 사용할 수 있다.
// 2. 첫 글자는 숫자가 될 수 없다.

// 카멜 표기법을 권장한다

// javascript도 대소문자가 구별된다.
// let apple 과 let Apple 은 서로 다른 변수입니다.

// 예약어 (reserved keyword)를 변수명으로 사용 불가
// let, class, return, function

// use strict 사용해보기

num = 5;
console.log(num);
