// 자바스크립트 자료형
// 8가지 기본 자료형

// no error
let message = "hello";
message = 1234567;
console.log(message);

// 변수는 어떤 순간에 문자열일 수 있고, 다른 순간엔 숫자가 될 수도 있다.

// 1. 숫자형(number type)
let n = 123;
n = 12.345;
// * , / , + , - 연산이 가능하다.

// 특수 숫자값
// Infinity : 무한대라는 의미입니다.

console.log(1 / 0);

// NaN : 데이터 타입이 잘못되었다는 의미
console.log("숫자가 아님" / 2);

// 2. BigInt
// const bigNumber = 123145463575346756;
const bigNumber = 123145463575346756453464124n;

console.log(bigNumber);


// 3. 문자형
let str = "Hello";
let str2 = 'hello';
let str3 = `Hello`;
// ` : 얘는 숫자판 1 왼쪽에 있는애다.
//  : 문자열안에 있는 애들 중에서 계산 가능한 경우 계산해줌

console.log(` this return value ${1 + 100}`);
console.log("this is value : " + 100);


// 4. boolean 형
let check = true;
let check2 = false;

let isGreater = 4 > 1;
console.log(isGreater);

// 5. null 값
let age = null;  // 존재하지 않는 값, 또는 알 수 없는 값 (unknown)
console.log(age);

// 6. undefined : 값이 할당되지 않은 상태를 나타낸다.
let age2;
console.log(age2);

// 7. 객체(object) --> 특수한 자료형 

// 8. symbol 형 --> 객체의 고유한 식별자를 만들 때 사용한다.

// 9. typeof
console.log("1--------------------");
console.log(typeof (undefined));

console.log(typeof (0));
console.log(typeof (10n));
console.log(typeof (true));
console.log(typeof ("foo"));
console.log(typeof (Math));
console.log(typeof (null));
console.log(typeof (alert));


