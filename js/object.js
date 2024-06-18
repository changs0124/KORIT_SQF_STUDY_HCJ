// {} : 객체
const user = {
    username: "admin",
    password: "1234",
    name: {
        lastName: "김",
        firstName: "준일"
    },

    print: () => {
        console.log("사용자이름 : " + user.username);
        // 표현식 : `${변수명}`
        console.log(`비밀번호: ${user.password}`);
    }
};

console.log(user);
console.log(user.username);
console.log(user.password);
user.print();