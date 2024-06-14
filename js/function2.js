const USERNAME = "admin";
const PASSWORD = "1234";

function login(username, password) {
    if(USERNAME === username && PASSWORD === password) {
        console.log("로그인 성공");
        return;
    }
    console.log("로그인 실패");
}

// 변수에 함수 담기(함수명 변경)
const login2 = login;

login2("admin", "1234");

const add2 = function add(x, y) {
    return x + y;
}

console.log(add2(10, 20));

// 익명함수 - 함수명 삭제
const sub2 = function (x, y) {
    return x - y;
}

console.log(sub2(20, 10));

// 화살표 함수(람다)
let div = function (x, y) {
    return !x || !y ? 0 : x / y;
}

// function은 변수 뒤의 =>으로 표현
div = (x, y) => {
    return !x || !y ? 0 : x / y;
}

// 화살표 함수(명령이 한줄) : 중괄호 생략(return도 같이 생략)
div = (x, y) => !x || !y ? 0 : x / y;

// 화살표 함수(매개변수가 하나면 괄호 생략)
let print = (data) => console.log(data);
print = data => console.log(data);

console.log(div(10, 2));
print("test");

// 함수안에 다른 함수를 선언하고자 한다면 화살표 함수를 사용해서 표현
function main() {
    const test = () => {
        console.log("테스트 함수 호출");
    }
    test();
}
main();

