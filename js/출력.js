var num = 10;
var sNum = "10";

// 연산자
// == 단순값 비교(자료형X)
console.log(num == sNum);
// === 자료형과 값 비교
console.log(num === sNum);

var num2;
// !  + undefined : boolean 자료형
// undefined = false -> !undefined -> true
console.log(!num2);
// !! + 자료형 : boolean 자료형 판단
// !! + undefined -> false
console.log(!num2);
/*
    !(not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리데이터로 변환하는 법
    var num 10;
    !!num -> true
    num = 0;
    !! num -> false(0은 false)

    var str = "test";
    !!str -> true
    str = "";
    !!str -> false  - 비어있으면 false

    var array = [ 1, 2, 3 ];
    !!array -> true
    array = [];
    !!array -> true : 배열은 비어 있어도 true
    !!array.length -> false : 길이가 0이면 false
    array.length > 0 -> false
    array.legnth === 0 -> false
*/

var num = 0;
console.log(!!num);

var str = "";   
var str1 = " ";     // 공백 = false
console.log(!!str);
console.log(!!str1);

var array = [];
console.log(!!array);
console.log(!!array.length);

var a;
console.log(!!a);

var b = null;
console.log(!!b);

var c = 0 / 0;      // 0 / 0 = 연산의 오류
console.log(c);     // Nan : 계산 불가능
console.log(!!c);   // false

if(num === 0) {
    console.log("num은 0입니다.");
}

if(!num) {
    var num2 = 20;
    console.log("num은 0입니다.");
    if(!!num2) {
        console.log("num2는 값이 있습니다.");
    }
}

if(!str) {
    console.log("빈 문자열입니다.");
}

if(!b) {
    console.log("Null 입니다.");
}


