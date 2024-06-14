// key와 value 변수명이 같다면  "key"로도 표현 가능
function createUser(username, password, name, email) {
    return {
        "username": username,
        "password": password,
        "name": name,
        "email": email
    }
}

// key값을 [] 묶기도 가능 - 스프레드(배열, 객체의 값들만 복사)
function createUser2(username, password, name, email) {
    return {
        ["username"]: username,
        ["password"]: password,
        ["name"]: name,
        ["email"]: email
    }
}

// key와 value의 변수명이 같을 땐 하나로 사용 가능
function createUser3(username, password, name, email) {
    return {
        username,
        password,
        name,
        email
    }
}

function createUser(username, password, name, email) {
    return {
        username: "username",
        password: "password",
        name: "name",
        email:"email"
    }
}

function main() {
    const username = "admin";
    const password = "1234";
    const name = "김준일";
    const email = "aaa@gmail.com";

    const user = createUser(username, password, name, email);
    const user2 = createUser2(username, password, name, email);
    const user3 = createUser3(username, password, name, email);

    console.log(user)
    console.log(user2)
    console.log(user3)
}

main();