const names = [ "김준일", "김준이", "김준삼" ];
// join의 기본값이 ,
console.log(names.join());

let userList = [];
let emptyUser = {
    username: "",
    password: ""
};
let user = {
    ...emptyUser
}
console.log(user);

function randerTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map((user, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
            </tr>
        `;
    }).join("");
}

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
    }

    if(e.keyCode === 13) {
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        
        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, { ...user } ];

            randerTable();
            
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            usernameInput.focus();
        }
    }
    console.log(e.target.name);
}