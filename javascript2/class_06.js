// 형변환 type conversion

// 숫자 1 = true,
// 숫자 0 = false
let value = true;

value = String(value);
console.log(typeof (value));

value = "123";

value = Number(value);
// console.log(typeof (value + 10));
console.log(value + 10);

let age = Number("임의의 문자열 123");
console.log(age); // NaN, 형변환 하는데에 실패했다.

// 불린형으로 형변환
let abc = Boolean(1);
let abc2 = Boolean(0);
console.log(abc);
console.log(abc2);