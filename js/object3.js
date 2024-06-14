function modifyUser(user, target, value) {
    const newUser = {
        ...user,    // ....객체명 : 해당 객체의 값만 대입
        [target]: value // [변수명] : 해당 변수명을 key값으로 쓰겠다
    }
    return newUser;
}

function main() {
    let user = {
        username: "admin",
        password: "1234"
    }
    // console.log(user);

    const newUser = modifyUser(user, "username", "test-user");
    // console.log(newUser);

    const newUser2 = modifyUser(newUser, "password", "1111");
    // console.log(newUser2);

    const userList = [ user, newUser ];
    console.log(userList);

    const newUserList = [...userList];

    // 스프레드 -> 깊은 복사(주소값을 새로만들어 안에 들어있는 값들만 옮기는 것을 의미)
    // 값을 추가하기 위해 사용
    // console.log(newUserList);
    
    // 얉은 복사 -> 리스트명만 바꿈(기존 리스트값이 바뀌면 같이 바뀜)
    const userList2 = userList;
}

main();