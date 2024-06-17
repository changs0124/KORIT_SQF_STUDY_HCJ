const names = [ "김준일", "김준이", "김준삼" ];
// join의 기본값이 ,
console.log(names.join(""));

// let은 호이스팅 X
let userList = [];
let emptyUser = {
    name: "",
    username: "",
    password: ""
};

let user = {
    ...emptyUser
};

function randerTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map((user, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
            </tr>
        `;
    }).join("");
};

// function randerTable() {
//     const userTableBody = document.querySelector(".user-talbe.body");
//     userTableBody.innerHTML = userList.map(({username, password}, index) => {
//         return `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${username}</td>
//                 <td>${password}</td>
//             </tr>
//         `;
//     }); 
// }

function handleUserInputKeyDown(e) {
    user = {
        ...user,
        [e.target.name]: e.target.value
    };

    if(e.keyCode === 13) {
        const nameInput = document.querySelector(".name-input");
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        
        if(e.target.name === "name") {
            usernameInput.focus();
        }
        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, { ...user } ];

            randerTable();
            
            // 어떤 변수가 들어가는 지, 초기값 설정 가능(emptyUser 사용)
            nameInput.value = emptyUser.name;
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            nameInput.focus();
        }
    };

    console.log(e.target.name);
};