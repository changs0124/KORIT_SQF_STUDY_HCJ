// 선언만이 먼저 되는 것이고 명령은 아래에서 위 순으로 실행
// 사용 X
console.log(a); // undefined

var a = 10;

console.log(a); // 10

var b = 10;
console.log(b); // 10

var b = 20;     // 재선언
console.log(b); // 20

b = "test";     // 재할당
console.log(b); // test

// let : 재선언 불가
// 호이스팅 불가
let c = 30;
console.log(c);

//  재할당 가능
c = 40;
console.log(c)  

// const
// 재선언 재할당 불가
// 호이스팅 불가
console.log(d);
const d = 50;
console.log(d);

d = "test";
console.log(d); // 오류
