// [중요] 비구조 할당
function main() {
    const user = {
        username: "admin",
        password: "1234",
        name: "김준일",
        email: "aaa@gmail.com"
    }

    const names = ["박현주", "이성희",  "권오광", "권혁진"];

    const { username, password, email } = user;
    console.log(username);
    console.log(password);
    console.log(email);

    const [ a, b ] = names;
    console.log(a);
    console.log(b);

    // rest
    const { name, ...rest2 } = user;
    console.log(rest2);

    const newUser = rest2;
    console.log(newUser);

    // 배열의 범위로 가지고 오기(시작 : 이상 ~ 끝 : 미만)
    console.log(names.slice(1, 3));
}

main();