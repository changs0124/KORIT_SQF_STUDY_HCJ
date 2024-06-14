function printUser({username, password, name, email}) {
    console.log(`사용자 이름 : ${username}`);
    console.log(`비밀번호 : ${password}`);
    console.log(`이름 : ${name}`);
    console.log(`이메일 : ${email}`);
}

function printUser2(user) {
    console.log(`사용자 이름 : ${user.username}`);
    console.log(`비밀번호 : ${user.password}`);
    console.log(`이름 : ${user.name}`);
    console.log(`이메일 : ${user.email}`);
}

function main() {
    const user = {
        username: "admin",
        password: "1234",
        name: "김준일",
        email: "aaa@gmail.com"
    }

    printUser(user);
    printUser2(user);

}

main();