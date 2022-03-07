// 기본 연산자

let x = 1;
x = -x;
console.log(x);

// 거듭제곱 연산자
console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);

let s = "my" + " string";

console.log(s);

console.log('1' + 2);
console.log(2 + '1');

console.log(2 + 2 + '1');

// 연산자 우선순위
// 단항 덧셈, 단항 부정

// 증감 감소 연산자
let counter = 2;
counter++;
console.log(counter);
console.log(counter--);
console.log(counter);

//  ++counter, counter++

let a = 1;
let b = 1;

let c = ++a;  //2
let d = b++;  //1

a = 2;
b = 2;
c = 2;
d = 1;

//  전위형, 후위형 이 있다.

let test1 = 2;
let test2 = 1 + (test1 *= 2);   //5?
console.log(test1);
console.log(test2);


